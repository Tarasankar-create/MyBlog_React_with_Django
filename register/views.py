from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User

# Create your views here.
@api_view(['POST'])
def signup(request):
    if request.method=='POST':
        data=request.data
        name=data['name']
        email=data['email']
        mob=data['mob']
        gender=data['gender']
        pwd=data['pwd']
        print(data)
        # if User.objects.filter(email=email).exists():
        #     return Response({'error':'Email already registerd'},status=400)
        # ob=User.objects.create(name=name,email=email,mob=mob,gender=gender,pwd=pwd)
        # ob.save()
        return Response(data,status=200)

    return Response(data)

@api_view(['POST'])
def login(request):
    if request.method=='POST':
        data=request.data
        email=data['email']
        pwd=data['pwd']
        try:
            ob=User.objects.get(email=email,pwd=pwd)
            username=ob.name
            return Response({'name':username},status=200)
        except Exception as e:
            return Response({'error':str(e)},status=400)

        return Response(data)
