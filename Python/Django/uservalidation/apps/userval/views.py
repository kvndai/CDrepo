# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import UserManager, User
from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages

# Create your views here.
def index(request):

    return render(request, 'userval/index.html')

def process(request):
    blah = request.POST['name']
    results = User.objects.login(blah)
    print results
    if 'good' in results:
        User.objects.create(username=blah)
        return redirect('/success')
    if 'error' in results:
        messages.error(request, 'ERROR')
    return redirect('/')

def success(request):
    context = {
        "ok": User.objects.all()
    }
    return render(request, 'userval/success.html', context)