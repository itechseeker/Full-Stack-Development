from rest_framework import serializers
from .models import Stock

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Serializer for Stock Model
class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        # It is strongly recommended that you explicitly set all fields that should be serialized using the fields attribute
        fields = ['name', 'roe', 'pb', 'company']


# Custom Serializer for custom jwt
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    # Override get_token of TokenObtainPairSerializer
    def get_token(cls, user):
        # Get token from TokenObtainPairSerializer
        token = super().get_token(user)

        # Adding role to token
        token['role'] = user.profile.role

        return token