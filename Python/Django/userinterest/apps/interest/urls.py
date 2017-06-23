from django.conf.urls import url
from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^$$', views.index),
    url(r'^process$', views.process),
    url(r'^success$', views.success),
    url(r'^result/(?P<id>\d+)$', views.result)
]
