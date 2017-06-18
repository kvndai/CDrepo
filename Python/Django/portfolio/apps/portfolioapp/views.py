# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    print request.method
    return render(request, 'portfolioapp/index.html')

def testimonials(request):
    print request.method
    return render(request, 'portfolioapp/testimonials.html')

def projects(request):
    print request.method
    return render(request, 'portfolioapp/projects.html')

def about(request):
    print request.method
    return render(request, 'portfolioapp/about.html')


