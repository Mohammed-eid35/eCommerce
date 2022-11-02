from django.shortcuts import render
from rest_framework import generics
from .models import Image, Product, Color, Size
from .serializers import ProductSerializer, ImagesSerializer, ColorSerializer, SizeSerializer


class ProductList(generics.ListCreateAPIView):
    """
    Home URLs
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # lookup_field = 'pk'


class ProductImage(generics.ListCreateAPIView):
    """
    List Or Create New Product Image
    """
    queryset = Image.objects.all()
    serializer_class = ImagesSerializer
    # lookup_field = 'pk'


class ProductColor(generics.ListCreateAPIView):
    """
    List Or Create New Product Colors
    """
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    # lookup_field = 'pk'


class ProductSize(generics.ListCreateAPIView):
    """
    List Or Create New Product Sizes
    """
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
    # lookup_field = 'pk'
