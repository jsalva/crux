from __future__ import absolute_import
import os

from .utils import get_env_variable

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

SECRET_KEY = get_env_variable('CRUX_SECRET_KEY')

DEBUG = get_env_variable('CRUX_DEBUG')

TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = get_env_variable('CRUX_ALLOWED_HOSTS')\
                    .split(':')

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'grappelli',
    'guardian',
    'threejs',
    'emberjs',
    'userdata',
    'django_extensions',
    'rest_framework',
)

ANONYMOUS_USER_ID = -1

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'crux.urls'

WSGI_APPLICATION = 'crux.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'transaction_hooks.backends.mysql',
        'NAME': get_env_variable('DATABASE_NAME'),
        'USER': get_env_variable('DATABASE_USER'),
        'PASSWORD': get_env_variable('DATABASE_PASSWORD'),
        'HOST': get_env_variable('DATABASE_HOST'),
        'PORT': get_env_variable('DATABASE_PORT'),
    },
}

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'compiled_static')

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
    #    'django.template.loaders.eggs.Loader',
)
