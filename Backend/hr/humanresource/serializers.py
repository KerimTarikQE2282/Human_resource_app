from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Employee
from .models import Job
from .models import Role
from django.contrib.auth.models import User




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

User=get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class META(UserCreateSerializer):
        model=User
        fields=('id','email','password')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model =Employee
        fields='__all__'
        depth=1

class Job_serializer(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields='__all__'

class Role_serializer(serializers.ModelSerializer):
    class Meta:
        model=Role
        fields='__all__'