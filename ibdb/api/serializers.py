from rest_framework import serializers
from .models import Book
from .models import User

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('bookId', 'title', 'genre', 'author', 'year', 'description', 'totalRatingScore', 'numberOfRatings', 'imageURL' )

class NewBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('bookId', 'title', 'genre', 'author', 'year', 'description', 'totalRatingScore', 'numberOfRatings', 'imageURL' )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')