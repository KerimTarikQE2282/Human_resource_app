from django.urls import path
from . import views

urlpatterns=[
        
 path('Employee-List/',views.List_Employees.as_view(),name='Employee_list'),
 path('Employee_Detailed/<str:email>/',views.Employee_Detail.as_view(),name='Employee_Detail'),
 path('Employee-create/',views.Create_Employee.as_view(),name='Create_Employee'),
 path('Create_Task/',views.Create_Task.as_view(),name='Create_Task'),
 path('Role/',views.Role_view.as_view(),name='Create_Task')


]
