from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=100)
    event_date = models.DateField()
    description = models.TextField()
    latitude = models.FloatField()
    longituge = models.FloatField()

    def __str__(self):
        return self.name