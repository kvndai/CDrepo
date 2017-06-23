# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User, Secret, Like
from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from datetime import datetime, timedelta

# Create your views here.
def index(request):

    return render(request, 'secrets/index.html')



# Registration form controller:
def create(request):
    errors = User.objects.register(request.POST)                                            # set errors = return value of userManager's register validation check
    if len(errors) == 0:                                                                    #if no errors in the return value array
        request.session['id'] = User.objects.filter(email=request.POST['email'])[0].id      #set session id to the id attribute of the email entered by the user. [0] is because .filter returns a list
        request.session['name'] = request.POST['first_name']
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
    secrets = Secret.objects.all().order_by('-created_at')[:10]
    now = timezone.localtime(timezone.now())
    return_list = []
    for secret in secrets:
        date = now - secret.createdAt
        return_list.append(secret,
                           Like.object.filter(user_id=request.session['id'],secret=secret),
                           {'days': date.days, 'hours': date.seconds/3600}
                           )
    context = {
        'secrets': return_list
    }
    return render(request, 'secrets/success.html', context)



def secretpost(request):
    if len(request.POST['secretpost']) < 1:
        messages.info(request, 'Your secret must be at least 5 characters!')
        return redirect('/secrets')
    else:
        Secret.objects.create(info=request.POST['secretpost'])
        return redirect('/secrets')

def like(request, sID, uID):
    if Like.objects.filter(user_id=request.session['id'], secret_id = sID):
        return redirect('/secrets')
    Like.objects.create(secret_id=sID, user_id=uID)
    like_count = len(Like.object.filter(secret_id=sID))
    Secret.obects.filter(id=sID).update(like_count)
    return redirect ('/secrets')


