"""pass"""
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


class PlayerList(APIView):
    """pass"""

    def get(self, request):
        """pass"""
        players = Player.objects.all()
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)
