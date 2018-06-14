from stravalib.client import Client
from .utils import getLastMonday, getThisWeek
import json, os, datetime

class DataProcessor:

    def __init__(self, token):
        self.dataService = Client()
        self.dataService.access_token = token
        self.me = self.dataService.get_athlete()

    def get_week_report(self):
        
        return {
            "weeklyRuns": [
                { "day": "Monday", "distance": 1 },
                { "day": "Tuesday", "distance": 1 },
                { "day": "Wednesday", "distance": 1 },
                { "day": "Thursday", "distance": 1 },
                { "day": "Friday", "distance": 1 },
                { "day": "Saturday", "distance": 1 },
                { "day": "Sunday", "distance": 1 },
            ],
            "dailyAverage": 1
        }