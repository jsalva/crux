from __future__ import absolute_import

from django.test import TestCase

class TestModuleImports(TestCase):
    """
    test import of all project modules
    """
    def test_userdata_imports(self):
        from userdata import *
        from userdata.models import UserData
        from userdata.signals import create_related
        from userdata.api1 import *
        from userdata.api1.serializers import (UserSerializer,
                                               UserDataSerializer)
        from userdata.api1.views import UserViewSet
        from userdata.api1.routers import user_router
        from userdata.api1.urls import urlpatterns


