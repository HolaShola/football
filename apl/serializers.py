"""serializer module"""
from rest_framework import serializers
from .models import Comand


class ComandSerializer(serializers.ModelSerializer):
    """pass"""

    class Meta:
        model = Comand
        fields = '__all__'
