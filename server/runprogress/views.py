from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .strava import strava
from .utils import getLastMonday

def index(request):

    athlete = strava.get_athlete()

    return JsonResponse({"body": "Strava athlete is called " + athlete.firstname + " " + athlete.lastname})

def test(request):
    return JsonResponse({"test": "test"})

def weeksRuns(request):
    # after=getLastMonday()
    gotActivities = strava.get_activities()

    # Probably need to aggregate distances or something for a chart. Will have to get an array of days of the current week as keys

    foundActivities = []
    for x in list(gotActivities):
        foundActivities.append(x.to_dict())

    return JsonResponse({"activities": foundActivities})