from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api1/', include('crux.api1', namespace='api1')),
    url(r'^social-auth/', include('social_auth.urls')),
    url(r'^.*$', 'crux.views.index'),
)
