from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework.views import APIView

from .models import Listing
# Create your views here.
from rest_framework.response import Response


class UserListings(APIView):
    def get(self, request):
        listings = [listing for listing in Listing.objects.filter(seller=self.request.user).values()]
        print(listings)
        response = {"listings": listings}
        return Response(response)
