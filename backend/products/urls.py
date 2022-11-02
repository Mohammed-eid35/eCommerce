from django.urls import path

from .views import (
    ProductList, ProductImage, ProductColor, ProductSize
)


urlpatterns = [
    # List or create products
    path('', ProductList.as_view()),


    # List or Create Images For Products
    path('images/', ProductImage.as_view()),

    # List or Create Sizes For Products
    path('colors/', ProductColor.as_view()),

    # List or Create Colors For Products
    path('sizes/', ProductSize.as_view()),


]
