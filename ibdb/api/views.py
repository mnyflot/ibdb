from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Book
from .serializers import BookSerializer, NewBookSerializer

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


class SearchAuthor(APIView):
    serializer_class = BookSerializer
    lookuk_url_kwarg = 'author'

    def get(self, request, format=None):
        author = request.GET.get(self.lookuk_url_kwarg)
        if author != None:
            book = Book.objects.filter(author=author)
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
            title = serializer.data.get('title')
            genre = serializer.data.get('genre')
            bookId = serializer.data.get('bookId')
            queryset = Book.objects.filter(bookId=bookId)
            if queryset.exists():
                book = queryset[0]
                book.title = title
                book.genre = genre
                book.bookId = bookId
                book.save(update_fields=['title', 'genre', 'bookId'])
                return Response(BookSerializer(book).data, status=status.HTTP_200_OK)
            else:
                book = Book(title=title, genre=genre, bookId=bookId)
                book.save()
                return Response(BookSerializer(book).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
