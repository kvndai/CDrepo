# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, "first_app/index.html")

def show(request, id):
    context = {
        'id': id
    }
    return render(request, 'first_app/showusers.html', context)

def create(request):
    if request.method == 'POST':
        print ('*' *50)
        print (request.POST)
        print ('*' * 50)
        request.session['name'] = request.POST['first_name']
        return redirect('/show')
    else:
        return redirect('/')
