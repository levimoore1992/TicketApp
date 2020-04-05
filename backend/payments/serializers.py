from rest_framework import serializers


class PaymentSerializer(serializers.Serializer):
    festival = serializers.CharField()
    price = serializers.IntegerField()
    image = serializers.CharField()
    seller = serializers.CharField()
