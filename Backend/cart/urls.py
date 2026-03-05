from django.urls import path
from .views import AddToCart

urlpatterns = [
    path('add-to-cart/', AddToCart.as_view(), name='add_to_cart'),
]