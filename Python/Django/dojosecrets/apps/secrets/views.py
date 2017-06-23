# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):

    return render(request, 'secrets/index.html')

def create(request):
    errors = User.objects.register(request.POST)
    print '3'
    print errors
    if len(errors) == 0:
        request.session['id'] = User.objects.filter(email=request.POST['email'])[0].id
        request.session['name'] = request.POST['first_name']
        print '4'
        return redirect('/secrets')
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
        return redirect('/secrets')
    for error in errors:
        messages.info(request, error)
    return redirect('/')

def secrets(request):

    return render(request, 'secrets/success.html')

def secretpost(request):
    if len(request.POST['secretpost']) < 1:
        messages.info(request, 'Your secret must be at least 5 characters!')
    else:
        Secret.objects.create()