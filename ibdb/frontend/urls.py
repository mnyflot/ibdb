from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('user', index),
    path('log-in', index),
    path('book/<str:bookId>', index),
    path('create-book', index),
    path('search/<searchPhrase>', index),
]
