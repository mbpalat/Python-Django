import json
from django.http import HttpResponse,JsonResponse
from django.shortcuts import redirect, render
from .forms import CustomerForm
from .models import Customer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def customer(request):
    return HttpResponse('Customer')

def create(request):
    print('Create')
    return render(request,'customers/create.html')

def fetch(request):
    customers = Customer.objects.all().order_by('id')
    return render(request,'customers/fetch.html',{'customers': customers})

def fetchcus(request):
    customers = Customer.objects.all().order_by('id')
    custlist = json.dumps(customers)
    return HttpResponse(custlist)

def fetchupdatedelete(request):
    return render(request,'customers/edit.html')


def save(request):  
    if request.method == "POST":  
        form = CustomerForm(request.POST)  
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('/customer/show')  
            except:  
                pass  
    else:  
        form = CustomerForm()  
    customers = Customer.objects.all().order_by('id')
    return render(request,'customers/fetch.html',{'customers': customers})

def edit(request, id):  
    customer = Customer.objects.get(id=id)  
    return render(request,'customers/edit.html', {'customer': customer})  

def update(request, id):  
    customer = Customer.objects.get(id=id)  
    form = CustomerForm(request.POST, instance = customer)  
    if form.is_valid():  
        form.save()   
        return redirect('/customer/show') 
    customers = Customer.objects.all().order_by('id')
    return render(request, 'customers/fetch.html', {'customers': customers})  

def destroy(request, id):  
    customer = Customer.objects.get(id=id)  
    customer.delete()   
    customers = Customer.objects.all().order_by('id')
    redirect('/customer/show')
    return render(request, 'customers/fetch.html', {'customers': customers})  



@csrf_exempt
def save_using_axios(request):
    try:
        body = json.loads(request.body)
        # name = body.get('name','')
        # mobile = body.get('mobile','')
        # customer = Customer()
        # customer.name = name
        # customer.mobile = mobile
        # customer.save()    
        Customer.objects.create(**body)
        response = {"status": True, "code": 200, "message": "Customer saved successfully"}
    except Exception as e:
        print(e)
        response = {"status": False, "code": 500, "message": "Internal Server Error"}
    return JsonResponse(response, safe=False)

@csrf_exempt
def edit_using_axios(request):
    try:
        body = json.loads(request.body)
        id= body.get('id','')
        customer = Customer.objects.get(id=id)  
        # name = body.get('name','')
        # mobile = body.get('mobile','')
        # customer = Customer()
        # customer.name = name
        # customer.mobile = mobile
        # customer.save()    
        Customer.objects.update(**body)
        response = {"status": True, "code": 200, "message": "Customer Updated successfully"}
    except Exception as e:
        print(e)
        response = {"status": False, "code": 500, "message": "Internal Server Error"}
    return JsonResponse(response, safe=False)
