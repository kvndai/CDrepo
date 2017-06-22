# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def validUser(self, postData):
        username = postData['name']
        errors = []
        if len(username) < 8:
            errors.append('too short')
        if len(postData) > 26:
            errors.append('too long')

        exists = User.objects.filter(username=username).exists()

        if exists:
            errors.append('already exists')

        if len(errors) == 0:
            user = User.objects.create(username=username)
            return ({'status': True, 'data': user})
        else:
            return ({'status': False, 'data': errors})


class User(models.Model):
    username = models.CharField(max_length=30)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    objects = UserManager()