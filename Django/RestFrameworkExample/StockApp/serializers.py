from rest_framework import serializers
from .models import Stock

class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        # It is strongly recommended that you explicitly set all fields that should be serialized using the fields attribute
        fields = ['name', 'roe', 'pb', 'company']