from django.db import models


# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=100, unique=True)
    event_date = models.DateField()
    description = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    image = models.ImageField(upload_to='event_image')

    def __str__(self):
        return f'{self.name}'
