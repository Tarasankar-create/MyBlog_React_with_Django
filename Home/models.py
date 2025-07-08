from django.db import models

# Create your models here.

class Add_Blog(models.Model):
    title=models.CharField(max_length=20,primary_key=True)
    authorName=models.CharField(max_length=30)
    date=models.DateTimeField()
    category=models.CharField(max_length=20)
    image=models.ImageField(upload_to='BlogImage/')
    desctitle=models.CharField(max_length=60)
    description=models.CharField(max_length=1000)

    def __str__(self):
        return self.title