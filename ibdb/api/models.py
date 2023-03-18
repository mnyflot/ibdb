from django.db import models

class Book(models.Model):
    bookId: str = models.CharField(max_length=8, default='', unique=False, primary_key=True)
    title: str = models.CharField(max_length=100, default='', unique=False)
    genre: str = models.CharField(max_length=100, default='', unique=False)
    author: str = models.CharField(max_length=50, default='', unique=False)
    year: str = models.CharField(max_length=50, default='', unique=False)
    description: str = models.CharField(max_length=2000, default='', unique=False)
    totalRatingScore: int = models.PositiveSmallIntegerField(default=0)
    numberOfRatings: int = models.PositiveSmallIntegerField(default=0)
    imageURL: str = models.CharField(max_length=1000, default='', unique=False)

class User(models.Model):
    email: str = models.CharField(max_length=30, default='', unique=False)
    username: str = models.CharField(max_length=20, default='', unique=False)
    password: str= models.CharField(max_length=20, default='', unique=False)
    admin = models.BooleanField(default=False)
    wishlist: str = models.CharField(max_length=10000, default='', unique=False)

