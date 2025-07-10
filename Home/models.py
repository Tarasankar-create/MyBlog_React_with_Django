from django.db import models

# Create your models here.

class Add_Blog(models.Model):
    email=models.EmailField(default=None)
    title=models.CharField(max_length=100,primary_key=True)
    authorName=models.CharField(max_length=40)
    date=models.DateTimeField()
    category=models.CharField(max_length=50)
    image=models.ImageField(upload_to='BlogImage/')
    desctitle=models.CharField(max_length=200)
    description=models.CharField(max_length=5000)

    def __str__(self):
        return self.title