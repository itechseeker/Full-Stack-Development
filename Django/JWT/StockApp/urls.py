from django.urls import path

from . import views

urlpatterns = [
    path('getInfo/', views.getStockInfo),
    path('addStock/', views.addStock),
]