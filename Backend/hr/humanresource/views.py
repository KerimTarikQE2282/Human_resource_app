from django.shortcuts import render

from django.http import HttpResponse, HttpResponseForbidden
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from .serializers import EmployeeSerializer
from .serializers import Role_serializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated
from .serializers import Task_serializer
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from .models import Employee
from .models import Role
from rest_framework.permissions import BasePermission
from django.http import HttpResponse
from django.contrib.auth.decorators import permission_required
# Create your views here.
def role_required(role):
    def decorator(view_func):
       
        def wrapper(request, currentEmployee ,*args, **kwargs):
            
            # if request.user.employee.role == role:
            #     return view_func(request, *args, **kwargs)
            # else:
            #     return HttpResponseForbidden()  # Or any other response for unauthorized access
            print(currentEmployee,role)
            return view_func(request, *args, **kwargs)
        return wrapper
    return decorator


class AllowUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        return True



#class Title(APIView):



class List_Employees(APIView):
    permission_classes = [IsAuthenticated]
   
    @role_required('admin')
    def get(self, request,currentEmployee,format=None):
       
        Employees=Employee.objects.all()
        Serialized_employees=EmployeeSerializer(Employees,many=True)
        return Response(Serialized_employees.data)

class Employee_Detail(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser] 
    def get(self, request, emailDetail, format=None):
       Emp=Employee.objects.get(email=emailDetail)
       
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
class Create_Task(APIView):
    permission_classes = [AllowAny]
    def post(self,request,format=None):
        serializedTask=Task_serializer(data=request.data)
        if serializedTask.is_valid():
            serializedTask.save()
            return Response(serializedTask.data,status=status.HTTP_200_OK)
        else:
             return Response(serializedTask.data,status=status.HTTP_400_BAD_REQUEST)
    

class Role_view(APIView):
    permission_classes = [AllowAny]
    def post(self,request,format=None):
        Serialized_Role=Role_serializer(data=request.data)
        if Serialized_Role.is_valid():
            Serialized_Role.save()
            return Response(Serialized_Role.data,status=status.HTTP_200_OK)
        else:
            return Response(Serialized_Role.data,status=status.HTTP_400_BAD_REQUEST)
    def get(self, request,format=None):
        Roles=Role.objects.all()
        Serialized_Roles=Role_serializer(Roles,many=True)
        return Response(Serialized_Roles.data)
class Get_Employee_Task(APIView):
    permission_classes = [AllowAny]
    def get(slef,request,email,format=None):
        Tasks=Tasks.objects.all()


@api_view(['POST'])
def Update_employee(request,email):
    employee=Employee.objects.get(email=email)
    Updated_Employee=EmployeeSerializer(data=request.data)
    if Update_employee.is_valid():
        Update_employee.save()
    return Response(Update_employee.data)





