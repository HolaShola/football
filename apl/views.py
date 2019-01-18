from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.http import Http404
from .models import Comand

def sayHello(request):
    return HttpResponse("<p>hello</p>")

def index(request):
    all_comands = Comand.objects.all()
    context = {'all_comands': all_comands}
    return render(request, 'apl/index.html', context)

def detail(request, comand_id):
    # try:
    #     comand = Comand.objects.get(id = comand_id)
    # except Comand.DoesNotExist:
    #     raise Http404("Comand does not exist")
    # return render(request, 'apl/detail.html', {'comand': comand})
    comand = get_object_or_404(Comand, id = comand_id)
    return render(request, 'apl/detail.html', {'comand': comand})