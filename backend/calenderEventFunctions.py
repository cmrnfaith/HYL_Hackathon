# from ics import Calender, Event



def generateIcs(data):
    print(data)
    
    c = Calender()
    e = Event()
    e.name = data['name']
    e.begin = data['date']
    
    c.events.add(e)
    c.events
    
    with open(data['name'] + ".ics", 'w') as f:
        f.write(c)
    
    return