# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse
import random
import datetime

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    return render(request, 'goldninja/index.html')

def process_money(request):
    now = datetime.datetime.now()
    if 'activity' not in request.session:
        request.session['activity'] = []
    if request.POST['building'] == 'farm':
        rand = random.randrange(10, 21)
        request.session['gold'] += [rand]
        request.session['activity'].append(request.session['gold'])
        place = 'farm!'
    elif request.POST['building'] == 'cave':
        rand = random.randrange(5, 11)
        request.session['gold'] += rand
        request.session['activity'].append(request.session['gold'])
        place = 'cave'
    elif request.POST['building'] == 'house':
        rand = random.randrange(2, 5)
        request.session['gold'] += rand
        request.session['activity'].append(request.session['gold'])
        place = 'house'
    elif request.POST['building'] == 'casino':
        rand = random.randrange(-50, 50)
        request.session['gold'] += rand
        request.session['activity'].append(request.session['gold'])
        place = 'casino'

    if request.session['gold'] < 0:
        request.session['activity'] = '<p class=red> Lost ' + str(abs(rand)) + ' gold from casino! ' + str(now.strftime('%Y/%m/%d %H:%M')) + '</p>'
        # else if gained money, show log in green color
    else:
        request.session['activity'] = '<p class=green> Earned ' + str(rand) + ' gold from ' + place + ' ' + str(now.strftime('%Y/%m/%d %H:%M')) + '</p>'
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')