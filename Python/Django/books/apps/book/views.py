# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Book, Author
from django.shortcuts import render


# Create your views here.
def index(request):
    # one = Author.objects.create(name='One', age=20)
    # two = Author.objects.create(name='Two', age=21)
    # three = Author.objects.create(name='Three', age=22)
    # four = Author.objects.create(name='Four', age=23)
    # five = Author.objects.create(name='Five', age=24)
    #
    # a = Book.objects.create(title='A', publishdate='1999', category='drama', author=one)
    # b = Book.objects.create(title='B', publishdate='1998', category='comedy', author=one)
    # c = Book.objects.create(title='C', publishdate='1997', category='scifi', author=four)
    # d = Book.objects.create(title='D', publishdate='1996', category='action', author=four)
    # e = Book.objects.create(title='E', publishdate='1995', category='documentary', author=four)


    for i in Book.objects.all():
        print i.author.name

    return render(request, 'book/index.html')