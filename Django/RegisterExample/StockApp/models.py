from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

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

  def __str__(self):
      return self.user.username

# Run update_profile() after the end of the save() method
@receiver(post_save, sender=User)
def update_profile(sender, instance, created, **kwargs):
    # If the user is created successfully
    if created:
        # Create user profile
        UserProfile.objects.create(user=instance)
    instance.profile.save()

