from __future__ import absolute_import

from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class UserData(models.Model):
    user = models.OneToOneField(User)

    def __unicode__(self):
        return u'%s\'s data' % self.user


