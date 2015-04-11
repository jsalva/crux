from __future__ import absolute_import

from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework.exceptions import PermissionDenied

from .serializers import (AuthUserPOSTSerializer,
                          AuthUserGETSerializer)

# Create your views here.
class AuthView(mixins.CreateModelMixin,
               generics.GenericAPIView):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AuthUserPOSTSerializer
        return AuthUserGETSerializer

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            return Response(AuthUserGETSerializer(request.user).data)
        else:
            raise PermissionDenied()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
