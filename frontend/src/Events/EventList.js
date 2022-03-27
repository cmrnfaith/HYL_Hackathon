import Event from "./Event";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import { AiFillEnvironment } from "react-icons/ai";
const EventList = ({ events, user, updateEventList }) => {
  const [filtered_events, setFiltered_events] = useState([]);
  const [liked_events, setLiked_events] = useState([]);

  function update_filtered_events_new(events) {
    setFiltered_events(events.filter((event) => !event.liked));
    setLiked_events(events.filter((event) => event.liked));
  }

  function update_events() {
    setLiked_events(filtered_events.filter((event) => event.liked));

    setFiltered_events(filtered_events.filter((event) => !event.liked));
  }

  useEffect(() => {
    update_events();
  }, [events]);

  return (
    <div className="event-list-container">
      <div className="event-filter">
        <Filter events={events} setEvents={update_filtered_events_new} />
      </div>
      {liked_events.length > 0 && <h1 className="subtitle">Liked Events</h1>}
      <div className="event-list-items">
        {liked_events.map((event) => (
          <Event
            key={event.eventID}
            event={event}
            user={user}
            update_likes={updateEventList}
          />
        ))}
      </div>
      <h1 className="subtitle">Other Events</h1>
      <div className="event-list-items">
        {filtered_events.map((event) => (
          <Event
            key={event.eventID}
            event={event}
            user={user}
            update_likes={updateEventList}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
