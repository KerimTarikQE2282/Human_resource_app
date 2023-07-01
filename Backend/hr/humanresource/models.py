from django.db import models

# Create your models here.
class Employee(models.Model):
    FullName = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phoneNumber = models.CharField(max_length=20)
    Employed = models.BooleanField(default=True)
    Title = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    Salary = models.IntegerField(null=True)
    password=models.CharField(max_length=200,default='')
    manager = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    #Referer = models.ForeignKey('Reference', on_delete=models.CASCADE,SET_DEFAULT='nati')
    user=models.ForeignKey('auth.User',related_name='Employee',on_delete=models.CASCADE,default='')

    
class Reference(models.Model):
    FullName=models.CharField(max_length=200)
    ID_Card=models.ImageField()
    Letter=models.ImageField()


    

