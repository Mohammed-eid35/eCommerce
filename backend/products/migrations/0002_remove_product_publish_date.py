# Generated by Django 4.1.2 on 2022-11-08 16:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='publish_date',
        ),
    ]
