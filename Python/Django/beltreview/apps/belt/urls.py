from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),                                 # Render Page
    url(r'^books$', views.books),                            # Render Page
    url(r'^books/add$', views.books_add),                    # Render Page
    url(r'^books/(?P<id>\d+)$', views.books_user),           # Render Page
    url(r'^user/(?P<id>\d+)$', views.user_user),             # Render Page
    url(r'^books/submit$', views.books_submit),              # Routing
    url(r'^create/review/(?P<id>\d+)$', views.createreview), # Routing
    url(r'^create$', views.create),                          # Routing
    url(r'^login$', views.login)                             # Routing
    ]