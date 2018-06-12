from django.test import TestCase
from .strava import strava, Strava
from .utils import getLastMonday, getThisWeek

import calendar

class StravaTestCase(TestCase):

    def test_strava_is_Strava_instance(self):
        self.assertIsInstance(strava, Strava)

    def test_strava_athlete_is_me(self):
        # ToDo: Change these names once the strava api is authenticated
        self.assertEqual(strava.me.firstname, "YOUR_FIRST_NAME_HERE")
        self.assertEqual(strava.me.lastname, "YOUR_LAST_NAME_HERE")

    # ToDo: Write your other tests here

class UtilsTestCase(TestCase):

    def test_getLastMonday_gives_a_monday(self):
        self.assertEqual(getLastMonday().weekday(), calendar.MONDAY)

    def test_getThisWeek_has_correct_number_of_days(self):
        self.assertEqual(len(getThisWeek()), 7)
    
    def test_getThisWeek_has_correct_days(self):
        gotWeek = getThisWeek()
        self.assertEqual(gotWeek[0].weekday(), calendar.MONDAY)
        self.assertEqual(gotWeek[1].weekday(), calendar.TUESDAY)
        self.assertEqual(gotWeek[2].weekday(), calendar.WEDNESDAY)
        self.assertEqual(gotWeek[3].weekday(), calendar.THURSDAY)
        self.assertEqual(gotWeek[4].weekday(), calendar.FRIDAY)
        self.assertEqual(gotWeek[5].weekday(), calendar.SATURDAY)
        self.assertEqual(gotWeek[6].weekday(), calendar.SUNDAY)