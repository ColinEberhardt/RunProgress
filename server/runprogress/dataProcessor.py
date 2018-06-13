from stravalib.client import Client
from .utils import getLastMonday, getThisWeek
import json, os, datetime

class DataProcessor:

    def __init__(self, token):
        self.dataService = Client()
        self.dataService.access_token = token
        self.me = self.dataService.get_athlete()

    def get_week_report(self):

        thisWeeksActivities = list(self.dataService.get_activities(after=getLastMonday()))

        week = getThisWeek()

        days = []

        for d in week:
            days.append({
                "day": d.strftime("%A"),
                "distance": sum(a for a in thisWeeksActivities if a["type"] == "Run" and a["start_date"].date() == d.date()) if d.date() <= datetime.date.today() else None
            })

        data = {
            "weeklyRuns": days,
            "dailyAverage": sum(i["distance"] for i in days if i["distance"] != None) / sum(1 for i in days if i["distance"] != None)
        }
        
        return data