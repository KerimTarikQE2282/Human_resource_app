from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from uuid import uuid4
from django.utils.deconstruct import deconstructible

class UserAccountManager(BaseUserManager):
    #fix middle name here
    def create_user(self, email, First_name, Middle_name,Last_name, password=None, phoneNumber=None, employed=True, title='', department='', salary=None,employee_image=''):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(First_name=First_name, Middle_name=Middle_name, Last_name=Last_name, email=email, phoneNumber=phoneNumber, employed=employed, title=title, department=department, salary=salary,employee_image=employee_image)
        user.set_password(password)
        user.save(using=self._db)
        return user
def upload_to(instance,filename):
    return 'posts/{filename}'.format(filename=filename)

@deconstructible
class PathAndRename(object):
   def __init__(self, sub_path):
       self.path = sub_path

   def __call__(self, instance, filename):
       # add extension as per your requirement, I am using .png
       ext = "jpg"
       # set filename as random string
       filename = '{}.{}'.format(uuid4().hex, ext)
       # return the whole path to the file
       return os.path.join(self.path, filename)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    username_validator = None
    username = None
    email = models.EmailField(max_length=200, unique=True)
    First_name = models.CharField(max_length=55,default='')
    Middle_name=models.CharField(max_length=55,default='')
    Last_name=models.CharField(max_length=55,default='')
    phoneNumber = models.CharField(max_length=20,default='')
    employed = models.BooleanField(default=True)
    title = models.CharField(max_length=200 ,default='')
    department = models.CharField(max_length=200,default='')
    salary = models.IntegerField(null=True,default=0)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    employee_image=models.ImageField(_("Image"), upload_to=upload_to,default='posts/default.jpg')
 
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['First_name','Middle_name', 'Last_name', 'phoneNumber','employed','title','department','salary','password','employee_image']

    objects = UserAccountManager()

    def get_full_name(self):
        return f"{self.First_name} {self.Middle_name} {self.Last_name}"

    def get_short_name(self):
        return self.First_name

    def __str__(self):
        return self.email