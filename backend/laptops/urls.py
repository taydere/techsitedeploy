from django.urls import path
from .views import LaptopListAPIView

urlpatterns = [
    path('', LaptopListAPIView.as_view(), name='laptop-list'),
]