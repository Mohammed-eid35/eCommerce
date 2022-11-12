from rest_framework import generics, status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import settings
import os

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    RequestEmailSerializer,
    EmailVerificationSerializer,
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
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
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
