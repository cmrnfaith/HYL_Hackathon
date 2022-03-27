from ics.icalendar import Calendar
from ics.event import Event


def generateIcs(data):
    data = data["result"][0]
    
    c = Calendar()
    e = Event()

    e.name = data['name']
    e.begin = data['date']
    e.location = data['location']
    
    print(e)
    c.events.add(e)
    print(c)

    with open(f"calendars\{data['name']}" + ".ics", 'w') as f:
        f.write(str(c))
    
    return