from django.shortcuts import render

from django.http import HttpResponse
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
from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated

from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from .models import Employee
from rest_framework.permissions import BasePermission
from django.http import HttpResponse
# Create your views here.
class AllowUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        return True



#class Title(APIView):



class List_Employees(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser] 
    def get(self, request,format=None):
        Employees=Employee.objects.all()
        Serialized_employees=EmployeeSerializer(Employees,many=True)
        return Response(Serialized_employees.data)

class Employee_Detail(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser] 
    def get(self, request, email, format=None):
       Emp=Employee.objects.get(email=email)
       
       serializedEmployee=EmployeeSerializer(Emp,many=False)
       print('this employee', serializedEmployee.data)
       return Response(serializedEmployee.data)



# @api_view(['POST'])
# @permission_classes([AllowUnauthenticated])
# def Create_Employee(request):
#     Serialized_employee=EmployeeSerializer(data=request.data)    
#     if Serialized_employee.is_valid():
#         Serialized_employee.save()
#     else:
#         return Response(Serialized_employee.errors, status=status.HTTP_400_BAD_REQUEST)
#     print(Serialized_employee.data)
#     return Response(Serialized_employee.data)

class Create_Employee (APIView):
    #permission_classes=[permissions.IsAuthenticated]
   
    permission_classes=([AllowUnauthenticated])
    parser_classes = [MultiPartParser, FormParser] 
    def post(self,request,format=None):
        print(request.data) 
        serialzer=EmployeeSerializer(data=request.data)
        if serialzer.is_valid():
            serialzer.save()
            return Response(serialzer.data,status=status.HTTP_200_OK)
        else:
            return Response(serialzer.data,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def Update_employee(request,email):
    employee=Employee.objects.get(email=email)
    Updated_Employee=EmployeeSerializer(data=request.data)
    if Update_employee.is_valid():
        Update_employee.save()
    return Response(Update_employee.data)


   




