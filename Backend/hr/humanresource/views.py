from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Employee
from .serializer import EmployeeSerializer
from django.shortcuts import get_object_or_404
# Create your views here.

@api_view(['GET'])
def AllEmployees(request):
    employees=Employee.objects.all()
    WorkingEmployees=employees.filter(Employed=True)
    serializer=EmployeeSerializer(WorkingEmployees,many=True)
    return Response(serializer.data)
@api_view(['POST'])
def HireEmployee(request):
    serializer=EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['GET'])
def FireEmployee(request,pk):
    FiredEmployee=get_object_or_404(Employee,pk=pk)
    FiredEmployee.Employed=False
    FiredEmployee.save()
    return HttpResponse("Successfully Deleted")
@api_view(['PUT'])
def UpdateSalary(request,pk):
    changedEmployee=Employee.objects.get(pk=pk)
    serializer=EmployeeSerializer(instance=changedEmployee,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['GET'])
def GetEmployee(request,pk):
    Emp=Employee.objects.get(pk=pk)
    serializer=EmployeeSerializer(Emp)
    return Response(serializer.data)