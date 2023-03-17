from django.urls import path
from .views import BookView
from .views import NewBookView
from .views import GetBook
from .views import SearchTitle
from .views import UserView
from .views import NewUserView
from .views import GetUser
from .views import get_all_books
urlpatterns = [
    path('home', BookView.as_view()),
    path('books', BookView.as_view()),
    path('new-book', NewBookView.as_view()),
    path('get-book', GetBook.as_view()),
    path('get_all_books', get_all_books),
    path('search-title', SearchTitle.as_view()),

    path('allUsers', GetUser.as_view()),
    path('users', UserView.as_view()),
    path('register', NewUserView.as_view()),
    # path('get-user', GetUser.as_view()), IKKE HA MED DENNE
]
