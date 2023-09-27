from django.urls import path
from . import views

urlpatterns=[
        
 path('Employee-List/<str:currentEmployee>/',views.List_Employees.as_view(),name='Employee_list'),
 path('Employee_Detailed/<str:emailDetail>/<str:currentEmployee>/',views.Employee_Detail.as_view(),name='Employee_Detail'),
 path('Employee_Login_Detailed/<str:emailDetail>/',views.Employee_Detail_Login.as_view(),name='Employee_Detail_login'),
 path('Employee-create/',views.Create_Employee.as_view(),name='Create_Employee'),
 path('Create_Job/',views.Create_Job.as_view(),name='Create_Task'),
 path('Role/',views.Role_view.as_view(),name='Create_Task')


]
