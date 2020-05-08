from django.db import models
from events.models import Event
from django.contrib.auth.models import User
# Create your models here.


class Listing(models.Model):
    STATUS = [
        ('NOT SENT', 'NOT SENT'),
        ('SENT', 'SENT'),
        ('DELIVERED', 'DELIVERED')
    ]
    event = models.ForeignKey(Event, on_delete=models.CASCADE, to_field='name')
    seller = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    price = models.IntegerField()
    status = models.CharField(max_length=10, choices=STATUS, default='NOT SENT')

    def __str__(self):
        return f'{self.seller}'
