from django.db import models


# Product Table Schema
class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.PositiveIntegerField()
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=255)
    subcategory = models.CharField(max_length=255)
    # publish_date = models.DateTimeField()

    def __str__(self) -> str:
        return self.title


# Images Table Schema
class Image(models.Model):
    ImageURL = models.URLField(max_length=255)
    ImageDescription = models.TextField(help_text='Image Description Must Be Provided',
                                        max_length=300)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_images", blank=True, null=True)

    def __str__(self) -> str:
        return self.ImageDescription


# Colors Table Schema
class Color(models.Model):
    name = models.CharField(max_length=255)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_colors", blank=True, null=True)

    def __str__(self) -> str:
        return self.name


# Sizes Table Schema
class Size(models.Model):
    name = models.CharField(max_length=255)
    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_sizes", blank=True, null=True)

    def __str__(self) -> str:
        return self.name
