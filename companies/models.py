"""module docstring"""
from django.db import models


class Stock(models.Model):
    """class Stock docstring"""
    ticker = models.CharField(max_length=10)
    open = models.FloatField()
    close = models.FloatField()
    volume = models.IntegerField()

    def __str__(self):
        return self.ticker
