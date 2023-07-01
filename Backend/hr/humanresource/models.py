from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

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

class UserAccountManager(BaseUserManager):
    def create_user(self,email,name,password=None):
        if not email:
            raise ValueError('users must have an email adress')
        email=self.normalize_email(email)
        user=self.model(email=email,name=name)
        user.set+password(password)
        user.save()
       
        if user.is_staff:
            try:
                employee = Employee.objects.get(user=user)
            except Employee.DoesNotExist:
                employee = None

            # If an Employee object doesn't exist, create one
            if not employee:
                employee = Employee()
                employee.user = user
                employee.email = user.email
                

            # Set the Employee object fields to match the User object fields
            employee.phoneNumber = extra_fields.get('phoneNumber', '')
            employee.Title = extra_fields.get('Title', '')
            # Set other fields as needed
            employee.save()

        return user

    
    
class UserAccount(AbstractBaseUser,PermissionsMixin):
   email= models.EmailField(max_length=200,unique=True)
   name=models.models.CharField(max_length=55)
   is_active=models.BooleanField(default=True)
   is_staff=models.BooleanField(default=False)
   objects=UserAccountManager()
   USERNAME_FIELD='email'
   REQUIRED_FIELDS=['name']

   def get_full_name(self):
       return self.name
   def get_short_name(self):
       return self.name
   def __str__(self):
       return self.name

