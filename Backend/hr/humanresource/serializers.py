from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User=get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class META(UserCreateSerializer):
        model=User
        fields=('id','email','First_name','Middle_name','Last_name','phoneNumber','employed','title','department','salary','password')