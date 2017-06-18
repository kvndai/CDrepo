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
        request.session['gold'] += random.randrange(10,21)
        request.session['activity'].append(request.session['gold'])
        place = 'farm!'
    elif request.POST['building'] == 'cave':
        request.session['gold'] += random.randrange(5,11)
        request.session['activity'].append(request.session['gold'])
        place = 'cave'
    elif request.POST['building'] == 'house':
        request.session['gold'] += random.randrange(2, 5)
        request.session['activity'].append(request.session['gold'])
        place = 'house'
    elif request.POST['building'] == 'casino':
        request.session['gold'] += random.randrange(-50, 51)
        request.session['activity'].append(request.session['gold'])
        place = 'casino'

    if request.session['gold'] < 0:
        request.session['log'] = '<p class=red>Lost ' + str(abs(request.session['gold'])) + ' gold from casino! ' + str(now.strftime('%Y/%m/%d %H:%M')) + '</p>' + request.session['log']
        # else if gained money, show log in green color
    else:
        request.session['log'] = '<p class=green>Earned ' + str(request.session['gold']) + ' gold from ' + place + ' ' + str(now.strftime('%Y/%m/%d %H:%M')) + '</p>'
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')