# Generated by Django 5.1.1 on 2024-11-04 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('user_name', models.CharField(max_length=200)),
                ('firt_name', models.CharField(blank=True, default='', max_length=200)),
                ('last_name', models.CharField(blank=True, default='', max_length=200)),
                ('number_phone', models.CharField(max_length=10)),
            ],
        ),
    ]