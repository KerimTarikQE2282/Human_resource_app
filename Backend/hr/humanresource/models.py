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
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(name=name, email=email)
        user.set_password(password)
        user.save()

        if user.is_staff:
            try:
                employee = Employee.objects.get(email=user.email)
            except Employee.DoesNotExist:
                employee = None

            # If an Employee object doesn't exist, create one
            if not employee:
                employee = Employee()
                employee.email = user.email

            # Set the Employee object fields to match the User object fields
            employee.phoneNumber = ''
            employee.title = ''
            # Set other fields as needed
            employee.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=200, unique=True)
    name = models.CharField(max_length=55)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.name