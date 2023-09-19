from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from uuid import uuid4
from django.utils.deconstruct import deconstructible
import os
class UserAccountManager(BaseUserManager):
    #fix middle name here
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model( email=email)
        user.set_password(password)
        user.save(using=self._db)
        return user


@deconstructible
class PathAndRename(object):
   def __init__(self, sub_path):
       self.path = sub_path

   def __call__(self, instance, filename):
       # add extension as per your requirement, I am using .png
       ext = ".png"
       # set filename as random string
       filename = '{}.{}'.format(uuid4().hex, ext)
       # return the whole path to the file
       return os.path.join(self.path, filename)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    username_validator = None
    username = None
    email = models.EmailField(max_length=200, unique=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password']

    objects = UserAccountManager()
    def __str__(self):
        return self.email
    #///////////////////////////////////////////////Djoser//////////////////////////////
def upload_employee_images_to(instance,filename):
    return 'posts/employee_images/{filename}'.format(filename=filename)
def upload_employee_contractual_images_to(instance,filename):
    return 'posts/employee_contractual_images/{filename}'.format(filename=filename)
def upload_Referer_images_to(instance,filename):
    return 'posts/Referer_images/{filename}'.format(filename=filename)
class Role(models.Model):
    RoleName=models.CharField(max_length=255)
class Employee(models.Model):
    email = models.EmailField(max_length=200, unique=True)
    First_name = models.CharField(max_length=55,default='')
    Middle_name=models.CharField(max_length=55,default='')
    Last_name=models.CharField(max_length=55,default='')
    phoneNumber = models.CharField(max_length=20,default='')
    employed = models.BooleanField(default=True)
    department = models.CharField(max_length=200,default='')
    salary = models.IntegerField(null=True,default=0)
    employee_image=models.ImageField(_("Image"), upload_to=upload_employee_images_to,default='posts/default.jpg')
    contractual_agreement=models.ImageField(_("Image"), upload_to=upload_employee_contractual_images_to,default='posts/default.jpg' )
    EmployedBy=models.ForeignKey('self',on_delete=models.CASCADE,blank=True,null=True)
    Role=models.ManyToManyField(Role)

    def get_full_name(self):
        return f"{self.First_name} {self.Middle_name} {self.Last_name}"

    def get_short_name(self):
        return self.First_name
class Tasks(models.Model):
    SetBy=models.CharField(max_length=200,blank=False)
    TaskTitle=models.CharField(max_length=300,blank=False)
    TaskDetail=models.CharField(max_length=5000,blank=False)
    SetTo=models.CharField(max_length=200,blank=False)

class Roles(models.Model):
    RoleName=models.CharField(max_length=255)    
class Referer(models.Model):
    First_name=models.CharField(max_length=55,default='')
    Middle_name=models.CharField(max_length=55,default='')
    Last_name=models.CharField(default='', max_length=50)
    Referer_image=models.ImageField(_("Image"), upload_to=upload_Referer_images_to,default='posts/default.jpg')
