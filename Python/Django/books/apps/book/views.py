# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Book
from django.shortcuts import render


# Create your views here.
def index(request):

    return render(request, 'book/index.html')