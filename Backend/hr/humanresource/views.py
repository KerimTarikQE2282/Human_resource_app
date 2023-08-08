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

from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from .models import Employee
from rest_framework.permissions import BasePermission
# Create your views here.
class AllowUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        return True
@api_view(['Get'])
@permission_classes([AllowUnauthenticated])
def Employee_list(request):
    Employees=Employee.objects.all()
    Serialized_employee=EmployeeSerializer(Employees,many=True)
    return Response(Serialized_employee.data)




from django.http import HttpResponse

class Employee_Detail(APIView):
    permission_classes = [AllowAny]

    def get(self, request, email, format=None):
        try:
            employee = Employee.objects.get(email=email)
        except Employee.DoesNotExist:
            return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)

        if employee.employee_image:
            image_path = employee.employee_image.path

            with open(image_path, 'rb') as f:
                image_data = f.read()

            return HttpResponse(image_data, content_type='image/jpeg')

        return Response({'error': 'Employee image not found'}, status=status.HTTP_404_NOT_FOUND)


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


   




