# Generated by Django 4.1.6 on 2023-03-06 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_book_bookid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.CharField(default='', max_length=50),
        ),
    ]