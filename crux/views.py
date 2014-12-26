from __future__ import absolute_import

from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')
