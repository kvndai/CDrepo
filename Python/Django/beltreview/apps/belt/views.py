# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User
from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from datetime import datetime, timedelta

# Create your views here.
def index(request):
    return render(request, 'belt/index.html')


def books(request):
    
    return render(request, 'belt/books.html')


def books_add(request):
    return render(request, 'belt/book_add.html')


def books_user(request, id):
    return render(request, 'belt/bookreviews.html')


def user_user(request, id):
    return render(request, 'belt/userreviews.html')


def create(request):
    errors = User.objects.register(request.POST)                                        # set errors = return value of userManager's register validation check
    if len(errors) == 0:                                                                # if no errors in the return value array
        request.session['id'] = User.objects.filter(email=request.POST['email'])[0].id  # set session id to the id attribute of the email entered by the user. [0] is because .filter returns a list
        request.session['name'] = request.POST['first_name']
        return redirect('/books')
    else:
        for error in errors:
            messages.info(request, error)
        print 'error check'
        return redirect('/')


def login(request):
    errors = User.objects.login(request.POST)
    if len(errors) == 0:
        request.session['id'] = User.objects.filter(email=request.POST['email'])[0].id
        request.session['name'] = User.objects.filter(email=request.POST['email'])[0].first_name
        return redirect('/books')
    for error in errors:
        messages.info(request, error)
    print 'error check'
    return redirect('/')

def books_submit(request):
    pass