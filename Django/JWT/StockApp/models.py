from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Stock(models.Model):
    name= models.CharField(max_length=10)
    roe= models.DecimalField(max_digits=4, decimal_places=2)
    pb=models.DecimalField(max_digits=4, decimal_places=2)
    company=models.TextField()

    def __str__(self):
        return self.name

class UserProfile(models.Model):
  # Get user from User Model
  user = models.OneToOneField(User,on_delete=models.CASCADE, related_name="profile")
  # Add role field to UserProfile
  role = models.CharField(max_length=20)

