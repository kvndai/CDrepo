# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, "first_app/index.html")

def show(rrequest):
    return render(main/show_users.html