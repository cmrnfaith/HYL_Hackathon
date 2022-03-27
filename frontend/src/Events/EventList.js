import Event from "./Event";
import Filter from "./Filter";
import { useState } from "react";
const EventList = ({ events, user }) => {
  const [filtered_events, setFiltered_events] = useState([]);

  return (
    <div className="event-list-container">
      <div className="event-filter">
        <Filter events={events} setEvents={setFiltered_events} />
      </div>
      <div className="event-list-items">
        {filtered_events.map((event) => (
          <Event key={event.eventID} event={event} user={user} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
