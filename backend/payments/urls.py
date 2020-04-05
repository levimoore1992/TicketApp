from django.urls import path
from rest_framework import routers
from .views import StripeView


router = routers.DefaultRouter()
urlpatterns = router.urls
urlpatterns += [
    path('api/stripe', StripeView.as_view(), name="stripe")
]

