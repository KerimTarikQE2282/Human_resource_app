from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Employee
from .serializer import EmployeeSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import UserSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
# Create your views here.


class EmployeeList(generics.ListCreateAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    permission_classes=[permissions.IsAuthenticated]


class FireEmployee(APIView):
    def Fire(self,request,pk):
        FiredEmployee=get_object_or_404(Employee,pk=pk)
        FiredEmployee.Employed=False
        FiredEmployee.save()
        return Response("Successfully Deleted",status=status.HTTP_204_NO_CONTENT)
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]

class UpdateSalary(APIView):
    
    def UpdateSalary(self,request,pk):
        changedEmployee=Employee.objects.get(pk=pk)
        serializer=EmployeeSerializer(instance=changedEmployee,data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    


class GetEmployee(generics.RetrieveAPIView):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer


