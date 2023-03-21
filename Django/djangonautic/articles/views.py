from django.http import HttpResponse
from django.shortcuts import render
from .models import Article

# Create your views here.
def article_data(request):
    articles = Article.objects.all().order_by('date')
    return render(request,'articles/article_data.html', {'articles': articles})

def article_about(request):
    return render(request,'articles/article_about.html')

def article_detail(request,slug):
    return HttpResponse(slug)