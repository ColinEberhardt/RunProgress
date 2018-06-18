from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .dataProcessor import DataProcessor
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    return JsonResponse({})

@csrf_exempt
def weeksRuns(request):

    token = request.POST.get("strava-token", False)

    if not token:
        return JsonResponse({
            "error": True,
            "message": "Strava token not supplied"
        })

    dataProcessor = DataProcessor(token)

    formattedActivities = dataProcessor.get_week_report()

    return JsonResponse(formattedActivities)