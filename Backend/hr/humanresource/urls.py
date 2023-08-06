from django.urls import path
from . import views

urlpatterns=[
        
 path('Employee-List/',views.Employee_list,name='Employee_list'),
 path('Employee_Detailed/<str:email>/',views.Employee_Detail,name='Employee_Detail'),
 path('Employee-create/',views.Create_Employee,name='Create_Employee')

]
