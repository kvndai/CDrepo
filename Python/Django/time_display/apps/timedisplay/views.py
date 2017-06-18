# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
from django.utils import timezone
from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    context = {
        'time':timezone.now()
    }

    return render(request, 'timedisplay/index.html', context)