from django.db import models

# Create your models here.
class User(models.Model):
    name=models.CharField(max_length=20)
    email=models.EmailField(primary_key=True,unique=True)
    mob=models.IntegerField()
    gender=models.CharField()
    pwd=models.CharField()

    def __str__(self):
        return self.name