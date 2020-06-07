from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Q
from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView

from events.models import Event
from .models import Listing
from rest_framework.response import Response


class ListingViewSet(APIView):

    def post(self, request, *args, **kwargs):
        data = request.data
        event = get_object_or_404(Event, name=data['event'])
        seller = get_object_or_404(User, username=data['seller'])
        Listing.objects.create(event=event, price=data['price'], seller=seller)
        return Response({'message': 'Post created'})

    def get(self, request, *args, **kwargs):

        listings = list(Listing.objects.filter(~Q(seller=request.user)).values())

        return Response(listings)


class UserListings(APIView):
    def get(self, request):
        listings = [listing for listing in Listing.objects.filter(seller=self.request.user).values()]
        response = listings
        return Response(response)


class UpdateStatus(APIView):

    def post(self, request, *args, **kwargs):
        data = request.data
        Listing.objects.filter(pk=data['id']).update(status='SENT')

        return Response({'status': 'SENT'})
