from django.urls import path
from . import views

urlpatterns=[
        
        path('',views.EmployeeList.as_view()),
        path('hire/',views.EmployeeList.as_view()),
        path('fire/<str:pk>',views.FireEmployee.as_view()),
        path('updateSalary/<str:pk>',views.UpdateSalary.as_view()),
        path('GetEmployee/<str:pk>',views.GetEmployee.as_view()),
       

]
