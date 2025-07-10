from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Add_Blog
from .Serializers import BlogSerializer
# Create your views here.
def home(request):
    return HttpResponse('Welcome to MyBlog')

@api_view(['POST'])
def add_blog(request):
    data=request.data
    fdata={
    'email':data.get('email'),
    'title':data.get('title'),
    'authorName':data.get('authorName'),
    'date':data.get('date'),
    'category':data.get('category'),
    'image':request.FILES.get('image'),
    'desctitle':data.get('desctitle'),
    'description':data.get('description')
    }
    if Add_Blog.objects.filter(title=fdata['title']).exists():
        return Response({'Error':'Title already exist'},status=400)
    try:
        serializer=BlogSerializer(data=fdata)
        if serializer.is_valid():
            serializer.save()
            return Response(status=201)
        else:
            print(serializer.errors)
            return Response(status=400)
    except Exception as e:
        return Response({'error':str(e)},status=500)
    
@api_view(['GET'])   
def show_blog(request):
    userEmail=request.GET.get('email')
    if not userEmail:
        return Response({'error':'Email required'},status=400)
    try:
        ob=Add_Blog.objects.filter(email=userEmail)
        serializer=BlogSerializer(ob,many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error':str(e)},status=404)
    
@api_view(['GET'])
def show_title_data(request):
    blogtitle=request.GET.get('blogtitle')
    try:
        obs=Add_Blog.objects.filter(title=blogtitle)
        serializer=BlogSerializer(obs,many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error':str(e)},status=404)
    
@api_view(['GET'])
def delete_blog(request):
    try:
        deltitle=request.GET.get('title')
        ob=Add_Blog.objects.get(title=deltitle)
        ob.delete()
        return Response({'messsage':'Blog deleted'},status=200)
    except Exception as e:
        return Response({'error':str(e)},status=403)