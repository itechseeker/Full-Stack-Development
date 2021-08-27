from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def getInfo(request):
    data=[{'name':'Tom', 'age':30},
          {'name':'David', 'age':45},
          {'name':'Lisa', 'age':28}]
    return HttpResponse(data)