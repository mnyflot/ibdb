# Generated by Django 4.1.5 on 2023-02-18 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_book_code_remove_book_created_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='bookId',
            field=models.CharField(default='', max_length=8),
        ),
    ]
