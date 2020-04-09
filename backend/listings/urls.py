from django.urls import path
from rest_framework import routers
from .api import ListingViewSet
from .views import UserListings
router = routers.DefaultRouter()
router.register('api/listings', ListingViewSet, 'listing')

urlpatterns = router.urls
urlpatterns += [
    path('api/listings/user-listings', UserListings.as_view(), name='user-listings')
]