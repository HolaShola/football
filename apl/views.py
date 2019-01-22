"""views module docstring"""
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
# from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Comand, Player
from .serializers import ComandSerializer


def say_hello(request):
    """say_hello function docstring"""
    return HttpResponse("<p>hello</p>")


def index(request):
    """index function docstring"""
    all_comands = Comand.objects.all()
    context = {'all_comands': all_comands}
    return render(request, 'apl/index.html', context)


def detail(request, comand_id):
    """detail function docstring"""
    # try:
    #     comand = Comand.objects.get(id = comand_id)
    # except Comand.DoesNotExist:
    #     raise Http404("Comand does not exist")
    # return render(request, 'apl/detail.html', {'comand': comand})
    comand = get_object_or_404(Comand, id=comand_id)
    return render(request, 'apl/detail.html', {'comand': comand})


def react(request):
    """react function docstring"""
    return render(request, 'apl/view1.html')


class ComandList(APIView):
    """pass"""

    def get(self, request):
        """pass"""
        comands = Comand.objects.all()
        serializer = ComandSerializer(comands, many=True)
        return Response(serializer.data)
