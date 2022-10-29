from django.contrib import admin
from .models import Product, Color, Size

# Register your models here.

admin.site.register(Product)
admin.site.register(Size)
admin.site.register(Color)
