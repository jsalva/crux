from __future__ import absolute_import

from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import UserDataViewSet

userdata_router = ExtendedSimpleRouter()
userdata_route = userdata_router.register(r'users',
                                          UserDataViewSet,
                                          base_name='user')
