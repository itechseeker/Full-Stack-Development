from .models import Stock
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def getStockInfo(request):
    # Get data from Stock table database
    stock_info = Stock.objects.all()
    # Load template for the view
    template = loader.get_template('stock_info.html')
    # Value to add to the template context
    context = {
        'stock_info': stock_info,
    }
    return HttpResponse(template.render(context, request))

