import json
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
from .serializers import Job_serializer
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from .models import Employee
from .models import Role
from .models import Job
from .models import Task
from .models import Email
from .serializers import Task_serializer
from .serializers import Email_serializer
from rest_framework.permissions import BasePermission
from django.http import HttpResponse
from django.contrib.auth.decorators import permission_required

def role_required(AllowedRole):
    def decorator(view_func):
       
        def wrapper(request ,*args, **kwargs):
            currentEmployee = kwargs.pop('currentEmployee', None)
            emailDetail = kwargs.pop('emailDetail', None)
            Roles=Role.objects.filter(employee=currentEmployee)
            print(AllowedRole)
            #print('from top===>',user,'email detail===>',emailDetail)
            # print('from top==>',Roles[0].RoleName)
            checkcount=0
            # for currentUserRoles in Roles:
              
            #   for checkRole in AllowedRole:
            #     print(currentUserRoles.RoleName,checkRole)
            #     if(currentUserRoles.RoleName==checkRole):

                    #checkcount=checkcount+1
            for userRole in Roles:
                if userRole.RoleName in AllowedRole:
                    print("allowed")
                    return view_func(request,currentEmployee, *args, **kwargs)
           
            return HttpResponseForbidden() 

           
           
            #return view_func(request,currentEmployee, *args, **kwargs)
                    
                  
        return wrapper
    return decorator

from rest_framework.authentication import TokenAuthentication

# def get_user_from_token(request):
#     user = None
#     token = request.META.get('HTTP_AUTHORIZATION')

#     if token:
#         token = token.split(' ')[1]

#         token_auth = TokenAuthentication()

#         try:
#             user, _ = token_auth.authenticate_credentials(token)
#         except:
#             pass

#     return user
class AllowUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        return True



#class Title(APIView):



class List_Employees(APIView):
    permission_classes = [AllowAny]
    #@role_required(['IT'])
    def get(self, request,currentEmployee,format=None):
        print(currentEmployee)
        Employees=Employee.objects.all()
        Serialized_employees=EmployeeSerializer(Employees,many=True)
        return Response(Serialized_employees.data)

class Employee_Detail(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser] 
    
    def get(self, request ,emailDetail,currentEmployee,format=None):
       print('from biottom',emailDetail)
       #print('my current Employee==>',currentEmployee)
       Emp=Employee.objects.get(email=emailDetail)
       serializedEmployee=EmployeeSerializer(Emp,many=False)
       #print('this employee', serializedEmployee.data)
       
       return Response(serializedEmployee.data)
class Employee_Detail_Login(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser] 
    
    def get(self, request ,emailDetail,format=None):
       
       
       Emp=Employee.objects.get(email=emailDetail)
       serializedEmployee=EmployeeSerializer(Emp,many=False)
       
       
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
    #parser_classes = [MultiPartParser, FormParser] 
    def post(self,request,format=None):
            data=request.data
            print('request data====================>',data)
        # serialzer=EmployeeSerializer(data=request.data)
        
            newEmployee = Employee.objects.create(
            email=data["email"],First_name=data["First_name"],
            Middle_name=data["Middle_name"],
            Last_name=data["Last_name"],
            phoneNumber=data["phoneNumber"],
            employed=False,salary=data["salary"]
            )  
            newEmployee.save()
            role_data = json.loads(data["Role"])
            for userRole in role_data:
                role_obj=Role.objects.get(id=userRole["id"])
                newEmployee.Role.add(role_obj)
            
            return Response("Done")
class Job_view(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        serialized_job = Job_serializer(data=request.data)
        print(serialized_job)
        if serialized_job.is_valid():
            serialized_job.save()
            return Response(serialized_job.data, status=status.HTTP_200_OK)
        else:
            return Response(serialized_job.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request,format=None):
        Jobs=Job.objects.all()
        serialized_jobs=Job_serializer(Jobs,many=True)
        return Response(serialized_jobs.data)
    def put(self,request,id,format=None):
       
        myJob=Job.objects.get(id=id)
        serializedJob=Job_serializer(instance=myJob,data=request.data)

        if serializedJob.is_valid():
            serializedJob.save()
            return Response(serializedJob.data)
        else:
            return Response(serializedJob.errors)
class Task_view(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        serialized_Task = Task_serializer(data=request.data)
        print(serialized_Task)
        if serialized_Task.is_valid():
            serialized_Task.save()
            return Response(serialized_Task.data, status=status.HTTP_200_OK)
        else:
            return Response(serialized_Task.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request,id,format=None):
        Tasks=Task.objects.filter(Task_set_to=id)
        serialized_Tasks=Task_serializer(Tasks,many=True)
        return Response(serialized_Tasks.data)
    def put(self,request,id,format=None):
       
        myTask=Task.objects.get(id=id)
        serializedTask=Task_serializer(instance=myTask,data=request.data)

        if serializedTask.is_valid():
            serializedTask.save()
            return Response(serializedTask.data)
        else:
            return Response(serializedTask.errors)
class Email_view(APIView):
        permission_classes = [AllowAny]
        def post(self, request, format=None):
            serialized_Email = Email_serializer(data=request.data)
            print(serialized_Email)
            if serialized_Email.is_valid():
                serialized_Email.save()
                return Response(serialized_Email.data, status=status.HTTP_200_OK)
            else:
                return Response(serialized_Email.errors, status=status.HTTP_400_BAD_REQUEST)
        def get(self, request,current_user,format=None):
            myEmail=Email.objects.filter(SentTo=current_user)
            Serilized_Email=Email_serializer(myEmail,many=True)
            return Response(Serilized_Email.data)




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
    def get(self,request,email,format=None):
        Tasks=Tasks.objects.all()


@api_view(['POST'])
def Update_employee(request,email):
    employee=Employee.objects.get(email=email)
    Updated_Employee=EmployeeSerializer(data=request.data)
    if Update_employee.is_valid():
        Update_employee.save()
    return Response(Update_employee.data)





