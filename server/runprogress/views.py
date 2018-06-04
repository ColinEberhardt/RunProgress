from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return JsonResponse({"body": "I AM FETCHED FROM THE BACKEND"})

def test(request):
    return JsonResponse({"test": "test"})