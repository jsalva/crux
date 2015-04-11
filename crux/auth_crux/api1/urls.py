from __future__ import absolute_import

from django.conf.urls import patterns, include, url

from .views import AuthView

urlpatterns = patterns('auth_crux.api1.views',
                       url(r'^auth/$', AuthView.as_view()),
    )
