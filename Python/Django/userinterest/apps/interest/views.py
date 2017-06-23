# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User, Interest
from django.shortcuts import render, redirect

# Create your views here.
def index(request):

    return render(request, 'interest/index.html')

def process(request):
    if request.method == 'POST':

        interest = Interest.objects.makeInterest(request.POST['interest'])
        user = User.objects.makeUser(request.POST['name'])

        User.interest.add(interest)

    return redirect('/success')

def success(request):
    context = {
        'blah': User.objects.all()
    }
    return render(request, 'interest/success.html')

def result(request, id):
    context = {
        'blah': Interest.objects.all()
    }
    return render(request, 'interest/result.html')