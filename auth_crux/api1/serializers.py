from __future__ import absolute_import

from django.contrib.auth.models import User

from rest_framework import serializers

class AuthUserPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',
                  'password')

class AuthUserGETSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)
