from django.urls import path
from rest_framework import routers
from .views import UserListings, ListingViewSet
router = routers.DefaultRouter()

urlpatterns = router.urls
urlpatterns += [
    path('api/listings/', ListingViewSet.as_view(), name='listings'),
    path('api/listings/user-listings', UserListings.as_view(), name='user-listings')
]