from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('user', index),
    path('log-in', index),
    path('search=<search>', index),
]
