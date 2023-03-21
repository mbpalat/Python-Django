
from django.urls import path
from .import views

urlpatterns = [
    path('', views.article_data),
    path('about/', views.article_about),
    path('(?P<slug>[\w-]+)/', views.article_detail),
    path('(?P<value>\d+)/$', views.article_detail),
]
