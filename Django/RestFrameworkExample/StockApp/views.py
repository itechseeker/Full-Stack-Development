# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Stock
from .serializers import StockSerializer
from rest_framework.response import Response


@api_view(['GET'])
def getStockInfo(request):
    #Get stock info from database
    stock_info = Stock.objects.all()
    # Using Serializer to convert data
    # Set many=True to serializer queryset or list of objects instead of a single object instance
    stock_serializer = StockSerializer(stock_info,many=True)

    return Response(stock_serializer.data)

@api_view(['POST'])
def addStock(request):
    # Get data from post request
    data = request.data
    # use Serializer to deserialize data
    serializer = StockSerializer(data=data)
    # Check if validation is successful
    if serializer.is_valid():
        # Save the data to database
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)