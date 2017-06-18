# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import string, random

# Create your views here.
def index(request):
    return render(request, 'rwgen/index.html')

def generate(request):
    if request.method == 'POST':
        if 'count' in request.session:
            request.session['count'] += 1
        else:
            request.session['count'] = 1

        word = ''
        letters = list(string.printable)
        for i in range(0,14):
            word = word + str(random.choice(letters))
        randomword = {
            'randomword': word
        }
        return render(request, 'rwgen/index.html', randomword)