# Generated by Django 4.1.6 on 2023-03-02 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='year',
            field=models.IntegerField(default='', max_length=100),
        ),
    ]