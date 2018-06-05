import datetime, calendar

def getLastMonday():
    lastMonday = datetime.datetime.today()
    oneday = datetime.timedelta(days=1)

    while lastMonday.weekday() != calendar.MONDAY:
        lastMonday -= oneday

    return lastMonday