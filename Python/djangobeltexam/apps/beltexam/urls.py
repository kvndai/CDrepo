from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^viewpoke$', views.viewpoke),
    url(r'^pokeuser$', views.pokeuser),
    url(r'^logout$', views.logout),
]
