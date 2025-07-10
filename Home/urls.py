from django.urls import path
from . import views
urlpatterns = [
    path('',views.home,name='home'),
    path('add_blog',views.add_blog,name='addblog'),
    path('show_blog',views.show_blog,name='showblog'),
    path('show_title_data',views.show_title_data,name='showtitleblog'), 
    path('del_blog',views.delete_blog,name='delblog'), 
]
