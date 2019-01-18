from django.urls import path
from . import views

urlpatterns = [
    # /apl/
    path('', views.index, name='index'),

    # /apl/id
    path('<int:comand_id>/', views.detail, name='detail'),
]