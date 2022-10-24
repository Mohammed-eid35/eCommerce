from rest_framework import serializers

from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=5, max_length=255)
    password = serializers.CharField(min_length=8, max_length=80, write_only=True)
    first_name = serializers.CharField(max_length=25, min_length=3)
    last_name = serializers.CharField(max_length=25, min_length=3)
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']
    
    def validate(self, attrs):
        email = attrs.get('email', '')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({'email': 'Email is already exist'})
        
        return super().validate(attrs)
    
    def create(self, validate_data):
        return User.objects.create_user(**validate_data)