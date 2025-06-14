from django.db import models

class InputData(models.Model):
    value = models.CharField(max_length=255)

    def __str__(self):
        return self.value