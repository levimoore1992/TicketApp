from django.db import models
from events.models import Event
from django.contrib.auth.models import User
# Create your models here.


class Listing(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.IntegerField()

    def __str__(self):
        return f'{self.seller}'
