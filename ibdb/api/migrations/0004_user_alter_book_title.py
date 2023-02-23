# Generated by Django 4.1.6 on 2023-02-23 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_book_bookid'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(default='', max_length=30)),
                ('username', models.CharField(default='', max_length=20, unique=True)),
                ('password', models.CharField(default='', max_length=8)),
            ],
        ),
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.CharField(default='', max_length=30),
        ),
    ]
