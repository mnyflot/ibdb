# Generated by Django 4.1.6 on 2023-03-10 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='username',
            field=models.CharField(default='', max_length=20, unique=True),
        ),
    ]
