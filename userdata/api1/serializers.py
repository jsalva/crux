from __future__ import absolute_import

from rest_framework import serializers

from ..models import UserData

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        depth = 1

