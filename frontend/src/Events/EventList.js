import Event from "./Event";
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
      <div className="event-list-items">
        {filtered_events.map((event) => (
          <Event key={event.eventID} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
