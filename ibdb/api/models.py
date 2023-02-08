from django.db import models
import string
import random

def generate_unique_code():
    length = 6
    
    while True:
        code = ''.join(random.choices(string.ascii_uppercase), k = length)
        if Book.objects.filter(code=code).count() == 0:
            break
    return code
        
# Create your models here.
class Book(models.Model):
    title : str = models.CharField(max_length=30, default='', unique=True)
    genre : str = models.CharField(max_length=20, unique=False)

