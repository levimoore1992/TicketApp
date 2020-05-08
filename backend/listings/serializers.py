from rest_framework import serializers

from .models import Listing


class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listing
        fields = ('event', 'seller', 'price')

    def validate_ticker(self, value):
        if not isinstance(value, str):
            raise serializers.ValidationError("This is not a string")
        return value