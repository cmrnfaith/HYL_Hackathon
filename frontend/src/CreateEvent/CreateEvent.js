import React, { useEffect, useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const [today, setToday] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // submitStrategy();
    setEventName("");
    setEventDescription("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
  };

  return (
    <div className="create-event-page-container">
      <div className="create-event-container">
        <form className="create-event-form" onSubmit={onSubmit}>
          <h1 className="title">Create an Event</h1>

          <div className="input-box">
            <span className="input-label">Event Name</span>
            <input
              value={eventName}
              type="text"
              placeholder="BSD"
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <span className="input-label">Event Description</span>
            <textarea
              value={eventDescription}
              placeholder="BSD is gonna be lit"
              onChange={(e) => setEventDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="input-box">
            <span className="input-label">Add a Date and Time</span>
            <input
              value={eventDate}
              type="date"
              min={today}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
            <input
              value={eventTime}
              type="time"
              onChange={(e) => setEventTime(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <span className="input-label">Event Location</span>
            <input
              value={eventLocation}
              placeholder="Nuthouse"
              type="text"
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
          </div>

          <div className="button">
            <input type="submit" value="Create Strategy" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
