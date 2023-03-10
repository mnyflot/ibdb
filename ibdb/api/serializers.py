from rest_framework import serializers
from .models import Book
from .models import User
from .models import Review


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('bookId', 'title', 'genre', 'author', 'year',
                  'description', 'totalRatingScore', 'numberOfRatings', 'imageURL')


class NewBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('bookId', 'title', 'genre', 'author', 'year',
                  'description', 'totalRatingScore', 'numberOfRatings', 'imageURL')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class NewReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('username', 'bookId', 'rating', 'comment')


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('username', 'bookId', 'rating', 'comment')
