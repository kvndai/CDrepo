from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$$', views.index),     # This line has changed!
    url(r'^users$', views.show),
    url(r'^new_users$', views.create),
    url(r'^users/(?P<id>\d+)$', views.show)
]
