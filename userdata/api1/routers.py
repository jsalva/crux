from __future__ import absolute_import

from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import UserViewSet

user_router = ExtendedSimpleRouter()
user_route = user_router.register(r'users',
                                  UserViewSet,
                                  base_name='user')
