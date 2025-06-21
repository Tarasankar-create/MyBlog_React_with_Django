from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User

# Create your views here.
@api_view(['POST'])
def signup(request):
    if request.method=='POST':
        data=request.data
        print(data)
        return Response(data,status=200)

    return Response(data)

@api_view(['GET'])
def login(request):
    if request.method=='POST':
        data=User.objects.all()
        print(data)
        return Response(data)
