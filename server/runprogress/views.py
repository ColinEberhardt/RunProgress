from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .strava import strava

def index(request):

    athlete = strava.me

    return JsonResponse({"body": "Strava athlete is called " + athlete.firstname + " " + athlete.lastname})

def weeksRuns(request):
    return JsonResponse(strava.get_activities())