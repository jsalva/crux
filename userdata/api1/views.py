from __future__ import absolute_import

from rest_framework import viewsets

from .serializers import UserDataSerializer
from ..models import UserData

# Create your views here.
class UserDataViewSet(viewsets.ModelViewSet):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer

