from django.test import TestCase
from .strava import *

class StravaTestCase(TestCase):

    def test_strava_is_Strava_instance(self):
        self.assertIsInstance(strava, Strava)

    def test_strava_athlete_is_me(self):
        # You will need to change this test once the strava api is authenticated against your account
        self.assertEqual(strava.me.firstname, "FirstName")
        self.assertEqual(strava.me.lastname, "LastName")

    # Write your other tests here