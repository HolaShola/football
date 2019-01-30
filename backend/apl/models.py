"""pass"""
from django.db import models


class Comand(models.Model):
    """pass"""
    name = models.CharField(max_length=30)
    city = models.CharField(max_length=20)
    founding_date = models.IntegerField()
    manager = models.CharField(max_length=25)

    def __str__(self):
        return self.name + ' - ' + self.city


class Player(models.Model):
    """pass"""
    name = models.CharField(max_length=30)
    comand = models.ForeignKey(Comand, on_delete=models.CASCADE)
    goals = models.IntegerField()
    assist = models.IntegerField()

    def __str__(self):
        return self.name
