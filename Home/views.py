from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
def home(request):
    return HttpResponse('Welcome to MyBlog')

@api_view(['POST'])
def add_blog(request):
    data=request.data
    print(data)
    return Response(status=200)