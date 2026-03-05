'''from django.urls import path
from .views import product_list

urlpatterns = [
    path('', product_list),   # no extra 'products/'
]'''
from django.urls import path
from .views import product_list, create_product, product_detail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('Products/', product_list, name="product_list"),
    path('Products/create/', create_product, name="create_product"),
    path('Products/<int:pk>/', product_detail, name="product_detail"),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)