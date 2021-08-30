from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# Create form for user sign up
class RegisterForm(UserCreationForm):
    role = forms.CharField(max_length=20)

    class Meta:
        model = User
        # password2 is confirm password
        fields = ('username', 'password1', 'password2', 'role')