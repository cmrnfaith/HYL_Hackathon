from ics.icalendar import Calendar
from ics.event import Event


def generateIcs(data):
    data = data["result"][0]
    
    c = Calendar()
    e = Event()
    e.name = data['name']
    e.begin = data['date']
    e.location = data['location']
    
    c.events.add(e)
    c.events
    
    with open(data['name'] + ".ics", 'w') as f:
        f.write(c)
    
    return