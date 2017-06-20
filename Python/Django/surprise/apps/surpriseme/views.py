# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
from django.shortcuts import render, redirect

# Create your views here.
VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

def index(request):
    return render(request, 'surpriseme/index.html')

def process(request):
    if request.method == 'POST':
        random.shuffle(VALUES)
        request.session['a'] = int(request.POST['number'])
        return redirect('/results')
    return redirect('/')

def results(request):
    context = {
        'pp': VALUES[: request.session['a']]
    }
    print VALUES
    return render(request, 'surpriseme/results.html', context)