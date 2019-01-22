"""pass"""
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from apl.models import Comand, Player
from .serializers import ComandSerializer, PlayerSerializer


class ComandList(APIView):
    """pass"""

    def get(self, request):
        """pass"""
        comands = Comand.objects.all()
        serializer = ComandSerializer(comands, many=True)
        return Response(serializer.data)


class ParticularComand(APIView):
    """Class for particular comand by id"""

    def get(self, request, comand_id):
        """get particular comand by id"""
        comand = get_object_or_404(Comand, id=comand_id)
        serializer = ComandSerializer(comand)
        return Response(serializer.data)


class PlayerList(APIView):
    """pass"""

    def get(self, request):
        """pass"""
        players = Player.objects.all()
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)


class ParticularPlayer(APIView):
    """Class for particular player by id"""

    def get(self, request, player_id):
        """get particular player by id"""
        player = get_object_or_404(Player, id=player_id)
        serializer = PlayerSerializer(player)
        return Response(serializer.data)