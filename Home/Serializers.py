from rest_framework import serializers
from .models import Add_Blog


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Add_Blog
        fields='__all__'