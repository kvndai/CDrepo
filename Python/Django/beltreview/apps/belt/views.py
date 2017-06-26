# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User, Book, Author, Review
from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from datetime import datetime, timedelta


def index(request):
    return render(request, 'belt/index.html')


def books(request):
    context = {
        "reviews": Review.objects.all().order_by('createdAt').reverse()[:3],
        "books": Book.objects.all(),
        "users": User.objects.get(id=request.session['id'])
    }
    return render(request, 'belt/books.html', context)


def books_add(request):
    context = {
        "authors": Author.objects.all()
    }
    return render(request, 'belt/book_add.html', context)

def books_submit(request):
    if request.method == "POST":
        if request.POST['name'] > "":
            author = Author.objects.create (name=request.POST['name'])
            book = Book.objects.create(title=request.POST['booktitle'], author=author)
            user = User.objects.get(id=request.session['id'])
            Review.objects.create(book=book, review=request.POST['review'], rating=request.POST['rating'], user=user)
            return redirect('/books/'+str(book.id))
        if request.POST['name'] == "":
            author = Author.objects.create (name=request.POST['listname'])
            book = Book.objects.create(title = request.POST['title'], author=author)
            user = User.objects.get(id=request.session['id'])
            Review.objects.create(book=book, review=request.POST['review'], rating=request.POST['rating'], user=user)
            return redirect('/books/'+str(book.id))

def createreview(request, id):
    book = Book.objects.get(id=id)
    user = User.objects.get(id=request.session['id'])
    Review.objects.create(book=book, review=request.POST['review'],rating=request.POST['rating'], user=user)
    return redirect('/books/'+ str(book.id))

def books_user(request, id):
    book= Book.objects.get(id=id)
    context= {
            'books' : Book.objects.get(id=id),
            'reviews' : Review.objects.filter(book=book)
        }
    return render(request, 'belt/bookreview.html', context)


def user_user(request, id):
    user = User.objects.get(id=id)
    context = {
        "users": User.objects.get(id=request.session['id']),
        "reviews": Review.objects.filter(user=user),
        "total": Review.objects.filter(user=user).count()
    }
    return render(request, 'belt/userreviews.html', context)


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

    

    