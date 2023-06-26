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
    manager = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    Referer = models.ForeignKey('Reference', on_delete=models.CASCADE)
    
class Reference(models.Model):
    FullName=models.CharField(max_length=200)
    ID_Card=models.ImageField()
    Letter=models.ImageField()

class User(models.Model):
    Email=models.CharField(max_length=320)
    PassWord=models.CharField(max_length=40)
    Role=models.CharField(max_length=100)
    

