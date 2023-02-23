from django.db import models
class Book(models.Model):
    title: str = models.CharField(max_length=50, default='', unique=False)
    genre: str = models.CharField(max_length=20, unique=False)
    bookId: str= models.CharField(max_length=8, default='', unique=False)

