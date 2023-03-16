# Generated by Django 4.1.6 on 2023-03-14 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bookId', models.CharField(default='', max_length=8)),
                ('title', models.CharField(default='', max_length=100)),
                ('genre', models.CharField(default='', max_length=100)),
                ('author', models.CharField(default='', max_length=50)),
                ('year', models.CharField(default='', max_length=50)),
                ('description', models.CharField(default='', max_length=1000)),
                ('totalRatingScore', models.PositiveSmallIntegerField(default=0)),
                ('numberOfRatings', models.PositiveSmallIntegerField(default=0)),
                ('imageURL', models.CharField(default='', max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(default='', max_length=30)),
                ('username', models.CharField(default='', max_length=20, unique=True)),
                ('password', models.CharField(default='', max_length=20)),
                ('wishlist', models.CharField(default='', max_length=10000)),
            ],
        ),
    ]
