# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Book
from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
        'blah' : Book.objects.all()
    }
    return render(request, 'books/index.html', context)

def process(request):
    Book.objects.create(title=request.POST['title'], author=request.POST['author'], category=request.POST['category'])
    return redirect('/')