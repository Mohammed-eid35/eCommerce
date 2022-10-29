from tkinter import CASCADE
from django.db import models
# from django.contrib.auth.models import User


class Size(models.Model):
    size = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.size


class Color(models.Model):
    color = models.CharField(max_length=50)
    def __str__(self) -> str:
        return self.color


# Product Table Schema
class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.PositiveIntegerField()
    # # adding product image to directory productImages
    # image = models.ImageField(blank=True, upload_to='productImages')
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=255)
    subcategory = models.CharField(max_length=255)
    publish_data = models.DateTimeField()
    productColor = models.ManyToManyField(Color, blank=True, related_name='colors')
    productSize = models.ManyToManyField(
        Size, blank=True, related_name='sizes')

    def __str__(self) -> str:
        return self.title

    # sale price property will be added
    # products discounts will be added

# slug