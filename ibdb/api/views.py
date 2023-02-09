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

class NewBookView(APIView):
    serializer_class = NewBookSerializer

    def post(self, request, format=None):
        pass