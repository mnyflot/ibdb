# Generated by Django 4.1.6 on 2023-02-08 09:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='code',
        ),
        migrations.RemoveField(
            model_name='book',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='book',
            name='guest_can_pause',
        ),
        migrations.RemoveField(
            model_name='book',
            name='host',
        ),
        migrations.RemoveField(
            model_name='book',
            name='votes_to_skip',
        ),
    ]
