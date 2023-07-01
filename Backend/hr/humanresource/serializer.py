from rest_framework import serializers
from .models import Employee
from .models import Reference
from django.contrib.auth.models import User

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields='__all__'
        user=serializers.ReadOnlyField(source='user.email')

class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reference
        fields='__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','email','password']
