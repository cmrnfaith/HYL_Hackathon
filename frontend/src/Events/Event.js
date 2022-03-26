import React, { useState } from "react";

const Event = ({ event }) => {
  return (
    <div className="event-container">
      <div className="title">{event.name}</div>
      <div className="date">{new Date(event.date).toLocaleDateString()}</div>
      <div className="type">{event.eventType}</div>
      <div className="faculty">{event.faculty}</div>
      <div className="location">{event.location}</div>
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
