from __future__ import absolute_import

from django.conf.urls import patterns, include, url

from .routers import user_router

urlpatterns = patterns('userdata.api1.views',
                       url(r'^', include(user_router.urls)),
    )
