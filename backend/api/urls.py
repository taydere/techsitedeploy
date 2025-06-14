from django.urls import path
from .views import InputDataCreateView

urlpatterns = [
    path('submit/', InputDataCreateView.as_view(), name='submit'),
]