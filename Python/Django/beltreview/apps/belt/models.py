# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX =re.compile('^[A-z]+$')

# Create your models here.
class UserManager(models.Manager):
    def register(self, postData):
        errors = []                                                         # create empty list to hold Error Messages
        if User.objects.filter(email=postData['email']):                    # check if the user's email already exists in the database
            errors.append('Email is already registered')                    # append error msg to list

        if len(postData['first_name']) < 2:                                 # check length of first name
            errors.append('First name must be at least 2 characters long')
        elif not NAME_REGEX.match(postData['first_name']):                  # check name against REGEX
            errors.append('First name must contain only alphabets')

        if len(postData['last_name']) < 2:
            errors.append('Last name must be at least 2 characters')
        elif not NAME_REGEX.match(postData['last_name']):
            errors.append('Last name must only contain alphabet')

        if len(postData['email']) < 1:                                      # check email field, cannot be left blank
            errors.append('Email cannot be blank')
        elif not EMAIL_REGEX.match(postData['email']):                      # check email against REGEX
            errors.append('Invalid email format')

        if len(postData['password']) < 8:                                   # check password length
            errors.append('Password must be at least 8 characters')

        elif postData['password'] != postData['confpw']:                    # check if password entered matches confpw field
            errors.append('Passwords do not match')

        if len(errors) == 0:                                                # IF the length of errors list is 0 (no errors in the list)
            User.objects.create(first_name=postData['first_name'], last_name=postData['last_name'], email=postData['email'], password=postData['password'])
        return errors                                                       # create the User instance. Return errors [] list

    def login(self, postData):
        errors = []                                                         # create empty list to hold error msgs
        if len(User.objects.filter(email=postData['email'])) < 1:           # check length of the filtered email entered is < 1, if is, the email does not exist in the DB
            errors.append('Please enter a valid email')
        if postData['password'] != User.objects.filter(email=postData['email'])[0].password:
            errors.append('Incorrect Password')                             # check if password entered matches the password in the DB

        return errors


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return str(self.id) + ' - ' + self.first_name + ' ' + self.last_name + ' - ' + self.email + ' - ' + self.password


class Author(models.Model):
    name = models.CharField(max_length=255)
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
        

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name='curr_author')
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)

class Review(models.Model):
    review = models.TextField(max_length=1000)
    rating = models.IntegerField()
    user = models.ForeignKey(User, related_name='curr_user')
    book = models.ForeignKey(Book, related_name='curr_book')
    createdAt = models.DateField(auto_now_add=True)
    updatedAt = models.DateField(auto_now=True)
