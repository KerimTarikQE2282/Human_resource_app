from django.urls import path
from . import views

urlpatterns=[
        
        path('',views.AllEmployees,name='AllEmployees'),
        path('hire/',views.HireEmployee,name='HireEmployee'),
        path('fire/<str:pk>',views.FireEmployee,name='FireEmployee'),
        path('updateSalary/<str:pk>',views.UpdateSalary,name='UpdateSalary'),
        path('GetEmployee/<str:pk>',views.GetEmployee,name='GetEmployee')

]