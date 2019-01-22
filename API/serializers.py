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
        # define which properties we want to receive
        # fields = ('ticker', 'volume')
        # if we want receive all properties:
        # fields = '__all__'
        fields = '__all__'
