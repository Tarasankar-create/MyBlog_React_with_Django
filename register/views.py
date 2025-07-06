from django.shortcuts import render
from rest_framework.decorators import api_view,parser_classes
from rest_framework.response import Response
from .models import User
from .Serializers import userSerializer
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def signup(request):
    if request.method=='POST':
        data=request.data
        name=data.get('name')
        email=data.get('email')
        mob=data.get('mob')
        gender=data.get('gender')
        img=request.FILES.get('pic')
        pwd=data.get('pwd')
        if User.objects.filter(email=email).exists():
            return Response({'error':'Email already registerd'},status=400)
        try:
            ob=User.objects.create(name=name,email=email,mob=mob,gender=gender,image=img,pwd=pwd)
            ob.save()
            return Response(status=200)
        except Exception as e:
            return Response({'error':str(e)},status=500)


@api_view(['POST'])
def login(request):
    if request.method=='POST':
        data=request.data
        email=data['email']
        pwd=data['pwd']
        try:
            ob=User.objects.get(email=email,pwd=pwd)
            inf={
                'name':ob.name,
                'email':ob.email,
                'mob':ob.mob,
                'gender':ob.gender,
                'image':ob.image.url
            }
            return Response({'inf':inf},status=200)
        except Exception as e:
            return Response({'error':str(e)},status=400)

@api_view(['PATCH'])
def updateUser(request):
    data=request.data
    try:
        ob=User.objects.get(email=data['email'],pwd=data['pwd'])
        serializer=userSerializer(ob,data=data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200)
        else:
            return Response(serializer.errors, status=400)
    except Exception as e:
        return Response({'error':str(e)},status=500)

   