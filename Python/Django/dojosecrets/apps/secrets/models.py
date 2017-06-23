# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX =re.compile('^[A-z]+$')

# Create your models here.
class UserManager(models.Manager):
    def register(self, postData):
        errors = []
        print '1'
        if User.objects.filter(email=postData['email']):
            errors.append('Email is already registered')

        if len(postData['first_name']) < 2:
            errors.append('First name must be at least 2 characters long')
        elif not NAME_REGEX.match(postData['first_name']):
            errors.append('First name must contain only alphabets')

        if len(postData['last_name']) < 2:
            errors.append('Last name must be at least 2 characters')
        elif not NAME_REGEX.match(postData['last_name']):
            errors.append('Last name must only contain alphabet')

        if len(postData['email']) < 1:
            errors.append('Email cannot be blank')
        elif not EMAIL_REGEX.match(postData['email']):
            errors.append('Invalid email format')

        if len(postData['password']) < 8:
            errors.append('Password must be at least 8 characters')

        elif postData['password'] != postData['confpw']:
            errors.append('Passwords do not match')

        if len(errors) == 0:
            User.objects.create(first_name=postData['first_name'], last_name=postData['last_name'], email=postData['email'], password=postData['password'])
        print '2'
        return errors

    def login(self, postData):
        errors = []
        if len(User.objects.filter(email=postData['email'])) < 1:
            errors.append('Please enter a valid email')
        if postData['password'] != User.objects.filter(email=postData['email'])[0].password:
            errors.append('Incorrect Password')

        return errors






class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
    objects = UserManager()

class Secret(models.Model):
    info = models.TextField(max_length=1000)
    like_count = models.IntegerField(default=0)
    user = models.ForeignKey(User, related_name='users')
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)

class Like(models.Model):
    secret = models.ForeignKey(Secret, related_name='likes')
    user = models.ForeignKey(Users, related_name='users')
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)

