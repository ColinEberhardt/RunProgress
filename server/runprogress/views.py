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

    # Probably need to aggregate distances or something for a chart. Will have to get an array of days of the current week mapped against cumulative distance

    foundActivities = []
    for x in list(gotActivities):
        foundActivities.append(x.to_dict())

    # Replace this harcoded response with real data!
    return JsonResponse({
        "weeklyRuns": [
            { "day": "Monday", "distance": 1 },
            { "day": "Tuesday", "distance": 1 },
            { "day": "Wednesday", "distance": 0 },
            { "day": "Thursday", "distance": 1 },
            { "day": "Friday", "distance": 2 },
            { "day": "Saturday", "distance": 5 },
            { "day": "Sunday", "distance": 3 }
        ],
        "dailyAverage": (1+1+0+1+2+5+3) / 7
    })