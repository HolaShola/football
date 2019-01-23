"""module docstring"""
# from django.urls import path
# from .views import (
#     ComandList,
#     PlayerList,
#     ParticularComand,
#     ParticularPlayer,
#     ComandCreateView,
#     ComandDeleteView
# )

# urlpatterns = [
#     # /api/

#     # /api/comands/
#     path('comands/', ComandList.as_view(), name='comands'),

#     # /api/players/
#     path('players/', PlayerList.as_view()),

#     # /api/comands/1
#     path('comands/<int:comand_id>/', ParticularComand.as_view()),

#     # /api/players/1
#     path('players/<int:player_id>/', ParticularPlayer.as_view()),

#     # /api/create/
#     path('<int:comand_id>/comand_create/', ComandCreateView.as_view()),

#     # /api/delete/
#     path('<int:comand_id>/comand_delete/', ComandDeleteView.as_view())
# ]

from rest_framework.routers import DefaultRouter
from api.views import ComandViewSet

router = DefaultRouter()
router.register(r'', ComandViewSet, base_name='comands')
urlpatterns = router.urls
