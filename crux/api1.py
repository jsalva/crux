from __future__ import absolute_import

from django.conf.urls import patterns, url, include

urlpatterns = patterns('',
                       url(r'^', include('userdata.api1.urls')),
                       url(r'^', include('auth_crux.api1.urls')),
                       )
