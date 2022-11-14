from rest_framework import generics, status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from rest_framework.request import Request
from django.urls import reverse
import jwt
from django.conf import settings
import os

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    RequestEmailSerializer,
    EmailVerificationSerializer,
    LogoutSerializer,
    ResetPasswordEmailRequestSerializer
)
from .models import User
from .utils import Util, CustomRedirect


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class RequestEmailVerificationView(generics.GenericAPIView):
    serializer_class = RequestEmailSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = User.objects.get(email=serializer.data['email'])
        access_token = str(RefreshToken.for_user(user).access_token)

        current_site = get_current_site(request).domain
        relative_link = reverse('email-verify')
        absurl = f'http://{current_site}{relative_link}?token={access_token}'
        redirect_url = request.data.get('redirect_url', '')
        email_body = f'Hi {user.email}. Use link below to verify your email\n{absurl}?redirect_url={redirect_url}'

        data = {
            'email_subject': 'Verify your email',
            'email_body': email_body,
            'to_email': user.email
        }

        Util.send_email(data)

        return Response({
            'success': True,
            'message': 'We have sent you a link to verify your email',
            'email': user.email
        }, status=status.HTTP_200_OK)


class VerifyEmailView(views.APIView):
    serializer_class = EmailVerificationSerializer

    def get(self, request):
        token = request.GET.get('token')
        redirect_url = request.GET.get('redirect_url')

        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])

            if not user.is_verified:
                user.is_verified = True
                user.save()

            if redirect_url and len(redirect_url) > 3:
                return CustomRedirect(f'{redirect_url}?token_valid=True&message=Email verified&token={token}')
            else:
                return CustomRedirect(f"{os.environ.get('FRONTEND_URL', '')}?token_valid=False")

        except jwt.ExpiredSignatureError:
            if redirect_url and len(redirect_url) > 3:
                return CustomRedirect(f'{redirect_url}?token_valid=False&message=token expired')
            else:
                return CustomRedirect(f"{os.environ.get('FRONTEND_URL', '')}?token_valid=False&message=token expired")

        except jwt.exceptions.DecodeError:
            if redirect_url and len(redirect_url) > 3:
                return CustomRedirect(f'{redirect_url}?token_valid=False&message=token expired')
            else:
                return CustomRedirect(f"{os.environ.get('FRONTEND_URL', '')}?token_valid=False&message=invalid token")


class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = [IsAuthenticated, ]

    def post(self, request: Request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class RequestPasswordResetEmailAPIView(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

            redirect_url = request.data.get('redirect_url', '')
            absurl = 'http://'+current_site + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl+"?redirect_url="+redirect_url
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)
