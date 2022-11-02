from dataclasses import field
from rest_framework import serializers
from .models import Product, Image, Color, Size


class ImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ['ImageURL', 'ImageDescription', 'product_id']


class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Color
        fields = ['name', 'product_id']


class SizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Size
        fields = ['name', 'product_id']


class ProductSerializer(serializers.ModelSerializer):
    # def APIOverView(self, request):
    #     api_urls = {
    #         'All-Items': 'all/',
    #         'Search by Category': '/?category=category_name/',
    #         'Search by SubCategory': '/?category=category_name/',
    #         'Add': '/create/',
    #         'Update': '/update/pk/',
    #         'Delete': '/item/pk/delete/',

    #     }
    #     return Response(api_urls)

    product_images = ImagesSerializer(read_only=True, many=True)
    product_colors = ColorSerializer(read_only=True, many=True)
    product_sizes = SizeSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        ordering = ['publish_date']

        fields = [
            'title',
            'description',
            'quantity',
            'category',
            'subcategory',
            'category',
            'price',
            'product_images',
            'product_colors',
            'product_sizes',
        ]
