# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'landscape/index.html')

def show(request, id):
    num = int(str(id))
    context = {
        'src': 'temp'
    }
    landscapes = {
        'snow': '/static/landscape/images/snow.jpg',
        'desert': '/static/landscape/images/desert.jpeg',
        'forest': '/static/landscape/images/forest.jpg',
        'vineyard': '/static/landscape/images/vineyard.jpeg',
        'tropical': '/static/landscape/images/tropical.jpeg'
    }
    if 1 <= num <= 10:
        context['src'] = landscapes['snow']
    elif 11 <= num <= 20:
        context['src'] = landscapes['desert']
    elif 21 <= num <= 30:
        context['src'] = landscapes['forest']
    elif 31 <= num <= 40:
        context['src'] = landscapes['vineyard']
    elif 41 <= num <= 50:
        context['src'] = landscapes['tropical']
    else:
        return redirect('/')
    return render(request, 'landscape/result.html', context)

