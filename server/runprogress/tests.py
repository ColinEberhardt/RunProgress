from django.test import TestCase
from .dataProcessor import DataProcessor 
from .utils import getLastMonday, getThisWeek
import calendar, os, json, datetime

class StravaTestCase(TestCase):

    def setUp(self):
        with open(os.path.join(os.path.dirname(__file__), 'StravaConfig.json')) as json_data_file:
            data = json.load(json_data_file)
        self.dataProcessor = DataProcessor(data["secret_token"])

    def test_strava_is_Strava_instance(self):
        self.assertIsInstance(self.dataProcessor, DataProcessor)

    def test_strava_athlete_is_me(self):
    
        self.assertEqual(self.dataProcessor.me.firstname, "Jess")
        self.assertEqual(self.dataProcessor.me.lastname, "Eberhardt")

    # ToDo: Write your other data processing tests here

class UtilsTestCase(TestCase):

    def test_getLastMonday_gives_a_monday(self):
        self.assertEqual(getLastMonday().weekday(), calendar.MONDAY)
    
    def test_getLastMonday_gives_last_monday(self):
        today = datetime.date.today()
        mon = getLastMonday()
        diff = today - mon
        self.assertTrue(diff.days <= 7)

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
    
    def test_weekdays_are_in_same_week(self):
        gotWeek = getThisWeek()
        today = datetime.date.today().isocalendar()
        for day in gotWeek :
            ic = day.isocalendar()
            self.assertEqual(today[0], ic[0])
            self.assertEqual(today[1], ic[1])

