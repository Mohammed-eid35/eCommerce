# Generated by Django 4.1.2 on 2022-10-25 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_user_is_admin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_superuer',
        ),
        migrations.AlterField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]
