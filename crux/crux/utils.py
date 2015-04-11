from __future__ import absolute_import
import os

from django.core.exceptions import ImproperlyConfigured

def get_env_variable(var_name, default=None):
    """Get the environment variable or return exception."""
    try:
        value = os.environ.get(var_name)
        if value is True or value.lower() == 'true'\
                or value == '1' or value == 1:
            return True
        if value is False or value.lower() == 'false'\
                or value == '0' or value == 0:
            return False
        return value
    except KeyError:
        if default is None:
            error_msg = "Set the %s environment variable" % var_name
            raise ImproperlyConfigured(error_msg)
        return default

