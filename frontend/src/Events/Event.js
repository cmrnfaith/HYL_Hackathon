import React from "react";
import { useHistory } from "react-router";

const Event = ({ event }) => {
  const history = useHistory();
  function viewEvent() {
    var url = "/event/" + event.eventID;
    history.push(url);
  }
  return (
    <div className="event-container" onClick={viewEvent}>
      <div className="title">{event.name}</div>
      <div className="date">
        Event Date: {new Date(event.date).toLocaleDateString()}
      </div>

      <div className="faculty">
        {event.faculty === "N/A" ? "" : event.faculty}
      </div>
      <div className="location">Event Location: {event.location}</div>
      <div className="type">
        {event.eventType ? "Category: " + event.eventType : ""}
      </div>
      <div className="private">
        {event.private === 0 ? "Public" : "Private"}
      </div>

      {/* <div className="time">{new Date(event.date).toLocaleTimeString()}</div> */}
      {/* <div className="duration">{event.duration}</div> */}
      {/* <div className="text">{event.description}</div> */}
      {/* <div className="attire">{event.attire}</div> */}
      {/* <div className="membership">{event.membership}</div> */}
      {/* <div className="price">
        {event.price === 0 ? "Free" : "$" + event.price.toFixed(2)}
      </div> */}
    </div>
  );
};
export default Event;
