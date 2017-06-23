# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class InterestManager(models.Manager):
    def makeInterest(self, post):
        interest = post['interest']

        try:
            user = User.objects.get(name=interest)
        except:
            user = User.objects.create(name=interest)

        return user

class Interest(models.Model):
    name = models.CharField(max_length=255)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
    objects = InterestManager()

class UserManager(models.Manager):
    def makeUser(self, post):
        name = post['name']

        try:
            user = User.objects.get(name = name)
        except:
            user = User.objects.create(name=name)

        return user


class User(models.Model):
    name = models.CharField(max_length=255)
    interest = models.ManyToManyField(Interest)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
    objects = UserManager()