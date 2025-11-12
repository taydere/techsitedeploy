from rest_framework import generics
from .models import Laptop
from .serializers import LaptopSerializer

class LaptopListAPIView(generics.ListAPIView):
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer