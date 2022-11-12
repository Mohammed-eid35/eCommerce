from rest_framework import serializers

from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed


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
