# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User, Poke
from django.shortcuts import render, redirect
from django.contrib import messages, sessions
from django.db.models import Count

# Create your views here.
def index(request):
    return render(request, 'beltexam/index.html')

def register(request):
    postData = {
        'name': request.POST['name'],
        'alias': request.POST['alias'],
        'email': request.POST['email'],
        'password': request.POST['password'],
        'confirm': request.POST['confirm'],
        'date': request.POST['date'],
    }
    errors = User.objects.register(postData)
    if len(errors) == 0:
        request.session['id'] = User.objects.get(email=postData['email']).id
        request.session['name'] = postData['name']
        return redirect('/viewpoke')
    for error in errors:
        messages.info(request, error)
    return redirect('/')

def login(request):
    postData = {
        'email': request.POST['email'],
        'password': request.POST['password']
    }
    errors = User.objects.login(postData)
    if len(errors) == 0:
        request.session['id'] = User.objects.get(email=postData['email']).id
        request.session['name'] = User.objects.get(email=postData['email']).name
        return redirect('/viewpoke')
    for error in errors:
        messages.info(request, error)
    return redirect('/')

def viewpoke(request):
    userid = request.session['id']
    context = {
        'users': User.objects.all().exclude(id=userid),
        'userpoked': Poke.objects.filter(poked=userid),
        'pokecount': Poke.objects.filter(poked__id=userid).values('user').annotate(Count('user')).count()
    }
    return render(request, 'beltexam/pokes.html', context)

def pokeuser(request):
    userid = request.session['id']
    if Poke.objects.poke(request.POST, userid):
        return redirect('/viewpoke')

def logout(request):
    for key in request.session.keys():
		del request.session[key]
    return redirect('/')

