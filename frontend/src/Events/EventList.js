import Event from "./Event";
import Filter from "./Filter";
import { useState, useEffect } from "react";
const EventList = ({ events }) => {
  const [filtered_events, setFiltered_events] = useState([]);

  useEffect(() => {
    setFiltered_events(
      events.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1))
    );
  }, [events]);

  return (
    <div className="event-list-container">
      <div className="filter">
        <Filter events={filtered_events} setEvents={setFiltered_events} />
      </div>
      <div className="event-list-items">
        {filtered_events.map((event) => (
          <Event key={event.eventID} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
