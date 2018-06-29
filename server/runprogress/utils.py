import datetime, calendar

def getLastMonday():
    today = datetime.date.today()
    if today.weekday() == 0:
        return today
    else:
        monday = today  - datetime.timedelta(days=today.weekday())
        return monday

def getThisWeek():
    monday = getLastMonday()
    week = [monday]
    for n in range (1,7):
       day = monday + datetime.timedelta(days = n)
       week.append(day)
    return week