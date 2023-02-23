from django.urls import path
from .views import BookView
from .views import NewBookView
from .views import GetBook
from .views import SearchTitle

urlpatterns = [
    path('home', BookView.as_view()),
    path('books', BookView.as_view()),
    path('new-book', NewBookView.as_view()),
    path('get-book', GetBook.as_view()),
    path('search-title', SearchTitle.as_view()),
]
