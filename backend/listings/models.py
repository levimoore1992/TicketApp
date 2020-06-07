from django.db import models
from events.models import Event
from accounts.models import UserProfile
from django.contrib.auth.models import User
# Create your models here.


class Listing(models.Model):
    STATUS = [
        ('NOT PURCHASED', 'NOT PURCHASED'),
        ('NOT SENT', 'NOT SENT'),
        ('SENT', 'SENT'),
        ('DELIVERED', 'DELIVERED')
    ]
    event = models.ForeignKey(Event, on_delete=models.CASCADE, to_field='name')
    seller = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username', related_name='seller')
    price = models.IntegerField()
    status = models.CharField(max_length=13, choices=STATUS, default='NOT PURCHASED')
    buyer = models.ForeignKey(User, default=None, null=True, blank=True, on_delete=models.PROTECT, related_name='buyer')
    avatar = models.CharField(max_length=255)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, *args, **kwargs):
        self.avatar = UserProfile.objects.filter(user__username=self.seller).values_list('avatar')
        super(Listing, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.seller}'
