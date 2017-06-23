from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^create$', views.create),
    url(r'^secrets$', views.secrets),
    url(r'^secrets/$', views.popular),
    url(r'^like/$', views.like),
    url(r'^secretpost/$', views.secretpost)
]