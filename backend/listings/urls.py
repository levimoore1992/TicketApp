from django.urls import path
from rest_framework import routers
from .views import UserListings, ListingViewSet, UpdateStatus
router = routers.DefaultRouter()

urlpatterns = router.urls
urlpatterns += [
    path('api/listings/', ListingViewSet.as_view(), name='listings'),
    path('api/listings/user-listings', UserListings.as_view(), name='user-listings'),
    path('api/listings/update-status/', UpdateStatus.as_view(), name='update-status')
]