from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User
from .models import Book
from .serializers import BookSerializer, NewBookSerializer, UserSerializer, NewUserSerializer

# Create your views here.


class BookView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class GetBook(APIView):
    serializer_class = BookSerializer
    lookuk_url_kwarg = 'bookId'

    def get(self, request, format=None):
        bookId = request.GET.get(self.lookuk_url_kwarg)
        if bookId != None:
            book = Book.objects.filter(bookId=bookId)
            if len(book) > 0:
                data = BookSerializer(book[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Book Not Found': 'Invalid Book ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class SearchTitle(APIView):
    serializer_class = BookSerializer
    lookuk_url_kwarg = 'title'

    def get(self, request, format=None):
        title = request.GET.get(self.lookuk_url_kwarg)
        if title != None:
            book = Book.objects.filter(title=title)
            if len(book) > 0:
                data = BookSerializer(book[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Book Not Found': 'Invalid Book ID'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class NewBookView(APIView):
    serializer_class = NewBookSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            bookId = serializer.data.get('bookId')
            title = serializer.data.get('title')
            genre = serializer.data.get('genre')
            author = serializer.data.get('author')
            year = serializer.data.get('year')
            description = serializer.data.get('description')
            totalRatingScore = serializer.data.get('totalRatingScore')
            numberOfRatings = serializer.data.get('numberOfRatings')
            imageURL = serializer.data.get('imageURL')
            queryset = Book.objects.filter(bookId=bookId)
            if queryset.exists():
                book = queryset[0]
                book.bookId = bookId
                book.title = title
                book.genre = genre
                book.author = author
                book.year = year
                book.description = description
                book.totalRatingScore = totalRatingScore
                book.numberOfRatings = numberOfRatings
                book.imageURL = imageURL
                book.save(update_fields=['bookId','title', 'genre','author','year', 'description', 'totalRatingScore','numberOfRatings', 'imageURL'])
                return Response(BookSerializer(book).data, status=status.HTTP_200_OK)
            else:
                book = Book(bookId=bookId, title=title, genre=genre, author=author, year=year, description=description, totalRatingScore=totalRatingScore, numberOfRatings=numberOfRatings, imageURL=imageURL)
                book.save()
                return Response(BookSerializer(book).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GetUser(APIView):
    serializer_class = UserSerializer
    lookuk_url_kwarg = 'username'

    def get(self, request, format=None):
        username = request.GET.get(self.lookuk_url_kwarg)
        if username != None:
            user = User.objects.filter(username=username)
            if len(user) > 0:
                data = UserSerializer(user[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Not Found': 'Invalid username'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class NewUserView(APIView):
    serializer_class = NewUserSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            queryset = User.objects.filter(username=username)
            if queryset.exists():
                user = queryset[0]
                user.username = username
                user.email = email
                user.password = password
                user.save(update_fields=['username', 'email', 'password'])
                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            else:
                user = User(username=username, email=email, password=password)
                user.save()
                return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
