from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from api.models import Product, Category


def products_list(request):
    products = Product.objects.all()
    data = [{'id': product.id, 'name': product.name, 'price': product.price,
             'description': product.description, 'count': product.count,
             'is_active': product.is_active} for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {'id': product.id, 'name': product.name, 'price': product.price,
            'description': product.description, 'count': product.count,
            'is_active': product.is_active}
    return JsonResponse(data)


def categories_list(request):
    categories = Category.objects.all()
    data = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data)


def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.product_set.all()
    data = [{'id': product.id, 'name': product.name, 'price': product.price,
             'description': product.description, 'count': product.count,
             'is_active': product.is_active} for product in products]
    return JsonResponse(data, safe=False)
