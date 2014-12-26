from __future__ import absolute_import

from django.contrib.auth.models import User

from rest_framework import serializers

from ..models import UserData


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData

class UserSerializer(serializers.ModelSerializer):
    data = UserDataSerializer(source='userdata')
    class Meta:
        model = User
        fields = ('id',
                  'username',
                  'first_name',
                  'last_name',
                  'data')

