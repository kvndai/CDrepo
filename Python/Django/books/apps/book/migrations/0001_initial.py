# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-20 19:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('author', models.CharField(max_length=30)),
                ('publishdate', models.CharField(max_length=30)),
                ('category', models.CharField(max_length=30)),
            ],
        ),
    ]
