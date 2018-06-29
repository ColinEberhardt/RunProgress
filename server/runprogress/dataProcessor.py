from stravalib.client import Client
from .utils import getLastMonday, getThisWeek
import json, os, datetime

class DataProcessor:

    def __init__(self, token):
        self.dataService = Client()
        self.dataService.access_token = token
        self.me = self.dataService.get_athlete()

    def get_week_report(self):
        #Filter to just dates in the last week
        activitiesAfter = datetime.datetime.combine(getLastMonday(), datetime.datetime.min.time())
        activities = list(self.dataService.get_activities(after = activitiesAfter))
        #Filter to just walk ativities
        ChosenActivities = []
        for activity in activities:
            if activity.type.lower() =="walk":
                ChosenActivities.append(activity)

        
        weeklyWalks = []
        week = getThisWeek()
        today = datetime.date.today()
        for n in week:
            formattedDay = {
                "day": n.strftime("%A"), 
                "distance" : 0.0 if n<= today else None        
            }
            weeklyWalks.append(formattedDay)


        for activity in ChosenActivities :
            for day in weeklyWalks:
                if day['distance'] is not None:
                    if day['day'] == activity.start_date.strftime("%A"):
                        day['distance'] += float('{0:.2f}'.format(float(activity.distance)/1000))
        counter = 0
        average = 0.0
        for day in weeklyWalks:
            if day['distance'] is not None:
                counter += 1
                average = average + day['distance']
        mean = average/counter



        return {
            "weeklyRuns": weeklyWalks,
            "dailyAverage": mean
        }