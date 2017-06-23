from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),            # Render Page
    url(r'^books$', views.books),       # Render Page
    url(r'create$', views.create),      # Routing
    url(r'^login$', views.login)        # Routing
    ]