import datetime, calendar

def getLastMonday():
    lastMonday = datetime.datetime.today()
    oneday = datetime.timedelta(days=1)

    while lastMonday.weekday() != calendar.MONDAY:
        lastMonday -= oneday

    return lastMonday

def getThisWeek():
    
    days = []

    dayToAdd = getLastMonday()
    oneday = datetime.timedelta(days=1)

    for i in range(0,7):
        days.append(dayToAdd)
        dayToAdd += oneday

    return days