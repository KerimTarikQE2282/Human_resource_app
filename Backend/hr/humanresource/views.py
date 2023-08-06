from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from .serializers import EmployeeSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions

from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from .models import Employee
from rest_framework.permissions import BasePermission
# Create your views here.
class AllowUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        return True
@api_view(['Get'])
def Employee_list(request):
    Employees=Employee.objects.all()
    Serialized_employee=EmployeeSerializer(Employees,many=True)
    return Response(Serialized_employee.data)
@api_view(['Get'])
def Employee_Detail(request,user_email):
    My_Employee=Employee.objects.all(email=user_email)
    Serialized_Employee=EmployeeSerializer(My_Employee)
    return Response(Serialized_Employee.data)


@api_view(['POST'])
@permission_classes([AllowUnauthenticated])
def Create_Employee(request):
    Serialized_employee=EmployeeSerializer(data=request.data)    
    if Serialized_employee.is_valid():
        Serialized_employee.save()
    else:
        return Response(Serialized_employee.errors, status=status.HTTP_400_BAD_REQUEST)
    print(Serialized_employee.data)
    return Response(Serialized_employee.data)

@api_view(['POST'])
def Update_employee(request,email):
    employee=Employee.objects.get(email=email)
    Updated_Employee=EmployeeSerializer(data=request.data)
    if Update_employee.is_valid():
        Update_employee.save()
    return Response(Update_employee.data)


   




