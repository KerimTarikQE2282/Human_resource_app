from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class Employee(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phoneNumber = models.CharField(max_length=20)
    employed = models.BooleanField(default=True)
    title = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    salary = models.IntegerField(null=True)
    password = models.CharField(max_length=200, default='')
   


class Reference(models.Model):
    name = models.CharField(max_length=200)
    id_card = models.ImageField()
    letter = models.ImageField()


class UserAccountManager(BaseUserManager):
    #fix middle name here
    def create_user(self, email, First_name, Last_name, password=None, phoneNumber=None, employed=True, title='', department='', salary=None):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(First_name=First_name, Last_name=Last_name, email=email, phoneNumber=phoneNumber, employed=employed, title=title, department=department, salary=salary)
        user.set_password(password)
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=200, unique=True)
    First_name = models.CharField(max_length=55,default='')
    Middle_name=models.CharField(max_length=55,default='')
    Last_name=models.CharField(max_length=55,default='')
    phoneNumber = models.CharField(max_length=20,default='')
    employed = models.BooleanField(default=True)
    title = models.CharField(max_length=200 ,default='')
    department = models.CharField(max_length=200,default='')
    salary = models.IntegerField(null=True,default=0)
 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['First_name', 'Last_name', 'password']

    objects = UserAccountManager()

    def get_full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email