from ics.icalendar import Calendar
from ics.event import Event

import datetime as dt


def generateIcs(data):
    c = Calendar()
    e = Event()

    e.name = data['name']
    e.begin = data['date']
    e.location = data['location']
    e.duration = dt.timedelta(hours=int(data['duration']))
    e.description = data['description']
    
    c.events.add(e)

    with open(f"{data['name']}" + ".ics", 'w') as f:
        f.write(str(c))
    
    return