from django.db import models

class Laptop(models.Model):
    model = models.CharField(max_length=255)
    processor = models.CharField(max_length=255)
    ram = models.CharField(max_length=100)
    storage = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.TextField(blank=True)

    def __str__(self):
        return self.model