
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('listings.urls')),
    path('', include('events.urls')),
    path('', include('accounts.urls')),
    path('', include('payments.urls'))
]
