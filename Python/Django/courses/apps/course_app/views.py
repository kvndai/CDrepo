# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Course
from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
        'blah': Course.objects.all()
    }
    return render(request, 'course_app/index.html', context)

def add(request):
    Course.objects.create(coursename=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def delete(request, id):
    Course.objects.get(id=id).delete()
    return redirect('/')

def destroy(request, id):
    context = {'courses':
        Course.objects.get(id=id)
    }
    return render(request, 'course_app/destroy.html', context)
