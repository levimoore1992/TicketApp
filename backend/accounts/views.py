from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import UserProfile
# Create your views here.
from rest_framework.views import APIView


class AccountsView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):

        user = self.request.user.id
        user_profile = get_object_or_404(UserProfile, id=user)
        response = {"image_source": str(user_profile.avatar)}
        return Response(response)
