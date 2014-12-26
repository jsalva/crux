from __future__ import absolute_import

from django.conf.urls import patterns, include, url

from .routers import userdata_router

urlpatterns = patterns('userdata.api1.views',
                       url(r'^', include(userdata_router.urls)),
    )
