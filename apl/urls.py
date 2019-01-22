"""module docstring"""
from django.urls import path
from . import views

urlpatterns = [
    # /apl/
    path('', views.index, name='index'),

    # /apl/id
    path('<int:comand_id>/', views.detail, name='detail'),

    # /apl/react/
    path('react/', views.react, name='react'),

    # /apl/all/
    path('all/', views.ComandList.as_view())
]
