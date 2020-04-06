from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Listing


class ListingSerializer(serializers.ModelSerializer):
    seller = serializers.SerializerMethodField('returnSeller')

    def returnSeller(self, seller):
        seller = User
        return seller

    class Meta:
        model = Listing
        fields = ('event', 'price', 'seller')

