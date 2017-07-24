from __future__ import unicode_literals
from django.db import models
import datetime
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX =re.compile('^[A-zt]+$')

class UserManager(models.Manager):
    def register(self, postData):
        errors = []
        # Check whether email exists in db
        if User.objects.filter(email=postData['email']):
            errors.append('Email is already registered')
        # Validate first name
        if len(postData['name']) < 2:
            errors.append('First name must be at least 2 characters')
        elif not NAME_REGEX.match(postData['name']):
            errors.append('First name must only contain alphabet')
        # Validate last name
        if len(postData['alias']) < 2:
            errors.append('Alias must be at least 2 characters')
        elif not NAME_REGEX.match(postData['alias']):
            errors.append('Alias must only contain alphabet')
        # Validate email
        if len(postData['email']) < 1:
            errors.append('Email cannot be blank')
        elif not EMAIL_REGEX.match(postData['email']):
            errors.append('Invalid email format')
        # Validate password
        if len(postData['password']) < 8:
            errors.append('Password must be at least 8 characters')
        # Validate confirm password
        elif postData['password'] != postData['confirm']:
            errors.append('Passwords do not match')
        # Validate date
        if postData['date'] == '':
            errors.append('Date of birth cannot be blank')
        elif len(postData['date']) > 10:
            errors.append('Date of birth must be valid date')
        else:
            current = str(datetime.datetime.now().strftime('%Y-%m-%d'))
            cYear = int(current[:4])
            cMonth = int(current[5:7])
            cDay = int(current[8:])
            postData['date'] = str(postData['date'])
            year = int(postData['date'][:4])
            month = int(postData['date'][5:7])
            day = int(postData['date'][8:])
            if (year > cYear) or (year == cYear and month > cMonth) or (year == cYear and month == cMonth and day > cDay):
                errors.append('Birthdate must be in the past')

        # if no errors
        if len(errors) == 0:
            # Generate new salt
            salt = bcrypt.gensalt()
            # Form data must be encoded before hashing
            password = postData['password'].encode()
            # Hash pw with password and salt
            hashed_pw = bcrypt.hashpw(password, salt)
            # add to database
            User.objects.create(name=postData['name'], alias=postData['alias'], email=postData['email'], password=hashed_pw, date=postData['date'])

        return errors

    def login(self, postData):
        errors = []
        # if email is found in db
        if User.objects.filter(email=postData['email']):
            form_pw = postData['password'].encode()
            db_pw = User.objects.get(email=postData['email']).password.encode()
            # if hashed passwords do not match
            if not bcrypt.checkpw(form_pw, db_pw):
                errors.append('Incorrect password')
        # else if email is not found in db
        else:
            errors.append('Email has not been registered')
        return errors

class User(models.Model):
    name = models.CharField(max_length=45)
    alias = models.CharField(max_length=45)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class PokeManager(models.Manager):
    def poke(self, postData, user_id):

        Poke.objects.create(user_id=user_id, poked_id=postData['thepoked'])
        print Poke.objects.filter(user_id=user_id)
        return True

class Poke(models.Model):
    user = models.ForeignKey(User, related_name='poker')
    poked = models.ForeignKey(User, related_name='poked')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = PokeManager()
    
