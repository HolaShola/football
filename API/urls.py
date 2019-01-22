"""module docstring"""
from django.urls import path
from . import views

urlpatterns = [
    # /API/

    # /API/id
    # path('<int:comand_id>/', views.detail, name='detail'),

    # /API/comands/
    path('comands/', views.ComandList.as_view(), name='react'),

    # /API/players/
    path('players/', views.PlayerList.as_view())
]
