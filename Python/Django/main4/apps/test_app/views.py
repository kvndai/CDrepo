# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Blog, Comment
from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
        'blah' : Blog.objects.all()

    }
    return render(request, 'test_app/index.html', context)

def blogs(request):
    # using ORM
    Blog.objects.create(title=request.POST['title'], blog=request.POST['blog'])
    # INSERT INTO class Blog (title, blog, created_at, updated_at) VALUES (title, blog, created_at, updated_at)

    return redirect('/')

def comments(request, id):
    blog = Blog.objects.get(id=id)
    Comment.objects.create(comment=request.POST['comment'], blog=blog)
    return redirect('/')
