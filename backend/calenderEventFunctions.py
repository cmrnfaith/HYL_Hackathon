from ics.icalendar import Calendar
from ics.event import Event


def generateIcs(data):
    print(data)
    
    c = Calendar()
    e = Event()
    e.name = data['name']
    e.begin = data['date']
    
    c.events.add(e)
    c.events
    
    with open(data['name'] + ".ics", 'w') as f:
        f.write(c)
    
    return