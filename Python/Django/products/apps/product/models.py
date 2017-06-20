# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=30)
    descrpition = models.TextField
    weight = models.IntegerField
    price = models.IntegerField
    cost = models.IntegerField
    category = models.CharField(max_length=30)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
