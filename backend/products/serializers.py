from dataclasses import field
from rest_framework import serializers
from .models import Color, Product, Size


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        # fields = '__all__'
        fields = '__all__'


class SizeSerializer(serializers.ModelSerializer):
   class Meta:
      model = Size
      fields = '__all__'


class ColorSerializer(serializers.ModelSerializer):
   class Meta:
      model = Color
      fields = '__all__'
