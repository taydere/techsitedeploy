from django.shortcuts import render
from rest_framework import generics
from .models import InputData
from .serializers import InputDataSerializer

class InputDataCreateView(generics.CreateAPIView):
    queryset = InputData.objects.all()
    serializer_class = InputDataSerializer
