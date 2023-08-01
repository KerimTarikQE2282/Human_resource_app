from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import UserSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
# Create your views here.







