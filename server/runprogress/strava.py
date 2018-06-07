from stravalib.client import Client
import json

strava = Client()

with open('runprogress/StravaConfig.json') as json_data_file:
    data = json.load(json_data_file)

strava.access_token = data["secret_token"]