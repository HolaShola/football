from rest_framework import serializers
from  .models import Stock

class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stock
        # define which properties we want to receive
        fields = ('ticker', 'volume')
        # if we want receive all properties:
        # fields = '__all__'