# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import UserManager, User
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

# Create your views here.
def index(request):

    return render(request, 'userval/index.html')

def process(request):
    results = User.objects.validUser(request.POST)
    print results
    if results['status']:
        username = results['data'].username
        return redirect('/success')
    else:
        return redirect('/')

def success(request):
    context = {
        "ok": User.objects.all()
    }
    return render(request, 'userval/success.html', context)