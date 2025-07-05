from django.db import models

# Create your models here.
class User(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    name=models.CharField(max_length=20)
    email=models.EmailField()
    mob=models.CharField(max_length=15)
    gender=models.CharField(max_length=5,choices=GENDER_CHOICES)
    image=models.ImageField(upload_to='Image/',default='Image/free.png')
    pwd=models.CharField(max_length=128)

    def __str__(self):
        return self.name