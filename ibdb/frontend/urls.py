from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('user/<str:username>', index),
    path('log-in', index),
    path('book/<str:bookId>', index),
    path('create-book', index),
    path('search/<searchPhrase>', index),
    path('register', index),
    path('user/<str:userName>', index),
    path('search_results', index),
]
