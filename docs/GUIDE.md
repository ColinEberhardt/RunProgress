# Project Guide
You are working on an app which is designed to give people a quick user-friendly summary of their week's activity on Strava, so that they might get an idea for how their exercise is distributed throughout the week. The framework for the app is already in place, and a front end developer has completed most of the work for the display, but we need you to implement the necessary server side code to provide the app with the correct data. To do this you'll be working in python, and using a helper library to access the Strava API. Your tasks are as follows:
#### Connect to strava
1. Set up an app on Strava in the developers area.
1. Set up a config file so that you can authenticate your connection to the Strava API.
    * Look at the `setUp` method in the `StravaTestCase` class in the [server/runprogress/views.py](../server/runprogress/views.py) file. It is reading from a configuration file. You'll need to create this file and format it correctly with your secret token from Strava. Talk to your mentor if you need help with the format.
    * While this will authenticate your connection to strava for your backend tests, each client (mobile phone app) will provide it's own token when it requests data from the server. Talk to your mentor about why we do this.
    * To authenticate the front-end, look at the import line `import secretToken from './credentials';` in the [client/App.js](../client/App.js) file. It imports the token in a variable from another file. Create this file and put the token in.
    * Talk to your mentor about why these files weren't already in the repository and how we keep sensitive information like passwords secure.
1. Ensure this is working correctly by running your unit tests. You should have an error. Read the message the test outputs and correct the test.
#### Gather your data
1. You can now write some more tests (read about [TDD](https://en.wikipedia.org/wiki/Test-driven_development) if interested) to check that you execute the following tasks correctly. At this stage you will be defining what the input and output of the functions you write will be before you write them.
1. Retrieve the data about your activities from Strava.
    * Read the [API documentation](https://pythonhosted.org/stravalib/api.html) for StravaLib (the Strava API helper) and find an appropriate method to call to get your activity details.
#### Compute the data
1. Filter this data to only include the current week (Mon - Sun).
    * Make sure that you don't include just the last 7 days and actually start at the beginning of this calendar week
1. Filter this data more to only include the activity type you wish to display.
    * Look at the API documentation again and use the response type to find details about what you are expecting to receive. Use this to filter your list of activities to just runs or rides.
1. Aggregate the data so that you store a list of each day of the week, with its total distance.
    * You will need to make sure that you fill in days which don't have any activities with something, look around in the code and talk to your mentor about what to do in this situation.
1. Use this data to calculate the average miles done per day.
    * Have a think about what you are calculating. Should you include the days where you haven't done any activity in your calculations or should you leave them out?
1. Return all of this data to the client-side in the format it expects to see the result!

You can find documentation on any resources you will need at the following places (if it takes more than 5 minutes of reading, feel free to ask your mentor!):
* [Strava developers](https://developers.strava.com/)
* [Strava API library](https://pythonhosted.org/stravalib/api.html)
* [Writing and running tests in Django](https://docs.djangoproject.com/en/2.0/topics/testing/overview/)
* [Working with dates in Python](https://docs.python.org/2/library/datetime.html)

## Stretch Goals
If you have completed all of the tasks and are feeling like a challenge, why not pick something to try from the following list, or talk with your mentor if you have an idea for another appropriate stretch goal.
* Review your data aggregation methods and see if there is a better way to do it. Have you used python's built in list comprehension?
* Do some work on the front end. Interested in javascript, react or css? Change some of the front end to display the data differently.