# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()

class Book(models.Model):
    title = models.CharField(max_length=30)
    publishdate = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    author = models.ForeignKey(Author)