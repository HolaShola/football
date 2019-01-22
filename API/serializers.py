"""serializer module"""
from rest_framework import serializers
from apl.models import Comand, Player


class ComandSerializer(serializers.ModelSerializer):
    """pass"""

    class Meta:
        model = Comand
        fields = '__all__'


class PlayerSerializer(serializers.ModelSerializer):
    """pass"""

    class Meta:
        model = Player
        fields = '__all__'
