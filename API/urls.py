"""module docstring"""
from django.urls import path
from . import views

urlpatterns = [
    # /api/

    # /api/comands/
    path('comands/', views.ComandList.as_view(), name='react'),

    # /api/players/
    path('players/', views.PlayerList.as_view()),

    # /api/comands/1
    path('comands/<int:comand_id>/', views.ParticularComand.as_view()),

    # /api/players/1
    path('players/<int:player_id>/', views.ParticularPlayer.as_view())
]
