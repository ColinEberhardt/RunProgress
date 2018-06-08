from stravalib.client import Client
from .utils import getLastMonday
import json
import os

class Strava:
    def __init__(self):
        self.client = Client()
        # Necessary to do this with file paths so that it works no matter how the server is started
        with open(os.path.join(os.path.dirname(__file__), 'StravaConfig.json')) as json_data_file:
            data = json.load(json_data_file)
        self.client.access_token = data["secret_token"]
        self.me = self.client.get_athlete()

    def get_activities(self):
        return {
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
        }
        # after=getLastMonday()
        gotActivities = list(self.client.get_activities())
        foundActivities = []
        for x in gotActivities:
            foundActivities.append(x.to_dict())

        # Probably need to aggregate distances or something for a chart. Will have to get an array of days of the current week mapped against cumulative distance

        # Replace this harcoded response with real data!

strava = Strava()