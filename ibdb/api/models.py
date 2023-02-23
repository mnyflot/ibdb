from django.db import models
class Book(models.Model):
    title: str = models.CharField(max_length=50, default='', unique=False)
    genre: str = models.CharField(max_length=20, unique=False)
    bookId: str= models.CharField(max_length=8, default='', unique=False)

class User(models.Model):
    email: str = models.CharField(max_length=30, default='', unique=False)
    username: str = models.CharField(max_length=20, default='', unique=True)
    password: str= models.CharField(max_length=20, default='', unique=False)

