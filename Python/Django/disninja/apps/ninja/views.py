# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    return render(request, 'ninja/index.html')

def ninja(request):
    return render(request, 'ninja/ninja.html')

def ninjacolor(request, color):
    print color
    context = {
        'src': '/static/ninja/images/notapril.jpg'
    }
    ninja_color = {
        'blue': '/static/ninja/images/leonardo.jpg',
        'red': '/static/ninja/images/raphael.jpg',
        'orange': '/static/ninja/images/michelangelo.jpg',
        'purple': '/static/ninja/images/donatello.jpg'
    }

    if color in ninja_color:
        context['src'] = ninja_color[color]
    return render(request, 'ninja/ninjacolor.html', context)