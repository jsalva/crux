from __future__ import absolute_import

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.conf import settings

from .models import UserData


@receiver(post_save, sender=User)
def create_related(sender, created, instance, **kwargs):
    if created:
        userdata, created = UserData.objects.get_or_create(user=instance)
