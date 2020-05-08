from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import UserProfile
# Create your views here.
from rest_framework.views import APIView


class AccountsView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):

        user = self.request.user.id
        user_profile = UserProfile.objects.filter(pk=user).values()[0]
        response = {"image_source": user_profile['avatar']}
        return Response(response)
