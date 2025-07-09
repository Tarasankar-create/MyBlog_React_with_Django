from django.urls import path
from . import views
urlpatterns = [
    path('',views.home,name='home'),
    path('add_blog',views.add_blog,name='addblog'),
    path('show_blog',views.show_blog,name='showblog'),
    
]
