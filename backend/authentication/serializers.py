from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=5, max_length=255)
    password = serializers.CharField(
        min_length=8, max_length=80, write_only=True)
    first_name = serializers.CharField(max_length=25, min_length=3)
    last_name = serializers.CharField(max_length=25, min_length=3)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']

    def validate(self, attrs):
        email = attrs.get('email', '')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {'email': 'Email is already exist'})

        return super().validate(attrs)

    def create(self, validate_data):
        return User.objects.create_user(**validate_data)


class LoginSerializer(serializers.ModelSerializer):
    tokens = serializers.CharField(max_length=555, read_only=True)
    tokens = serializers.SerializerMethodField()
    password = serializers.CharField(min_length=8, write_only=True)
    email = serializers.CharField(max_length=255)
    first_name = serializers.CharField(max_length=25, read_only=True)
    last_name = serializers.CharField(max_length=25, read_only=True)

    def get_tokens(self, obj):
        user = User.objects.get(email=obj['email'])
        return {
            'access': user.get_tokens()['access'], 'refresh': user.get_tokens()['refresh']
        }

    def validate(self, attrs):
        email = attrs['email']
        password = attrs.get('password', '')
        user = authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed(
                'bad credintials login failed')

        if not user.is_active:
            raise serializers.ValidationError(
                'Account not activated ,contact admin')

        return {
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'tokens': user.get_tokens()
        }

    class Meta():
        model = User
        fields = ['email', 'first_name', 'last_name', 'password', 'tokens']


class RequestEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=5)
    redirect_url = serializers.CharField(max_length=500, required=False)

    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email', '')

        if not User.objects.filter(email=email).exists():
            raise serializers.ValidationError({'email': 'Email is not exist'})

        return super().validate(attrs)


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ['token']


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_messages = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):

        try:
            RefreshToken(self.token).blacklist()

        except TokenError:
            self.fail('bad_token')


class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    redirect_url = serializers.CharField(max_length=500, required=False)

    class Meta:
        fields = ['email']


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)
