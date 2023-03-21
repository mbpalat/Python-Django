from .import views
from .models import Customer
from django.urls import path

urlpatterns = [
        path('', views.customer),
        path('create/', views.create),
        path('show', views.fetch),
        path('fetchupdatedelete', views.fetchupdatedelete),
        path('save', views.save),
        path('edit/<int:id>', views.edit),  
        path('update/<int:id>', views.update),  
        path('delete/<int:id>', views.destroy), 
        path('get', views.fetchcus),
        
        path('saveusingaxios', views.save_using_axios),  
        path('editusingaxios', views.edit_using_axios),  
        path('fetchusingaxios', views.save_using_axios),  
        path('deleteusingaxios', views.save_using_axios),  

]