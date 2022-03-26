import React, { useEffect, useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventFaculty, setEventFaculty] = useState("");
  const [eventPrice, setEventPrice] = useState("");

  const [today, setToday] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    submitEvent();
    // setEventName("");
    // setEventDescription("");
    // setEventDate("");
    // setEventTime("");
    // setEventLocation("");
  };

  const submitEvent = () => {
    console.log({
      eventName,
      eventDescription,
      eventDate,
      eventTime,
      eventDuration,
      eventLocation,
      eventType,
      eventFaculty,
      eventPrice,
    });

    var url = "/events";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "applcation/json",
      },
      credentials: "include",
      // body: JSON.stringify({
      //   name: eventName,
      //   dateTime: eventDate,
      //   location: eventLocation,
      //   price: eventPrice,
      //   attire: "casual",
      //   membership: "0",
      //   duration: eventDuration,
      //   private: "0",
      //   faculty: eventFaculty,
      //   description: eventDescription,
      //   eventType: eventType,
      //   hostID: "1",
      // }),
      body: JSON.stringify({
        name: "BSD TEST",
        date: "2022-08-01 16:20:00",
        location: "Sawatszy Household",
        price: "10",
        attire: "casual",
        membership: "0",
        duration: "2",
        private: "0",
        faculty: "Engineering",
        description: "A great time for some boys",
        eventType: "Party",
        hostID: "1",
      }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          let new_id = await res.json();

          console.log(new_id);
        } else if (res.status === 401) {
          console.log("Error in submitting strategy");
        } else {
          console.log("Error in submitting strategy");
        }
      })
      .catch((error) => {
        // Handle error
      });
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
              // required
            />
          </div>

          <div className="input-box">
            <span className="input-label">Event Description</span>
            <textarea
              value={eventDescription}
              placeholder="BSD is gonna be lit"
              onChange={(e) => setEventDescription(e.target.value)}
              // required
            ></textarea>
          </div>

          <div className="input-box">
            <span className="input-label">Add a Date and Time</span>
            <input
              value={eventDate}
              type="date"
              min={today}
              onChange={(e) => setEventDate(e.target.value)}
              // required
            />
            <input
              value={eventTime}
              type="time"
              onChange={(e) => setEventTime(e.target.value)}
              // required
            />
          </div>

          <div className="input-box">
            <span className="input-label">How long is your event? (Hours)</span>
            <input
              value={eventDuration}
              min="0"
              type="number"
              onChange={(e) => setEventDuration(e.target.value)}
              // required
            />
          </div>

          <div className="input-box">
            <span className="input-label">Event Location</span>
            <input
              value={eventLocation}
              placeholder="Nuthouse"
              type="text"
              onChange={(e) => setEventLocation(e.target.value)}
              // required
            />
          </div>

          <div className="input-box">
            <span className="input-label">Event Type</span>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              // required
            >
              <option value="Sports">Sporting - Dinos</option>
              <option value="University">University</option>
              <option value="Club">Club</option>
              <option value="Third Party">Third Party</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-box">
            <span className="input-label">Faculty</span>
            <select
              value={eventFaculty}
              onChange={(e) => setEventFaculty(e.target.value)}
              // required
            >
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
              <option value="Arts">Arts</option>
              <option value="Science">Science</option>
              <option value="Education">Education</option>
            </select>
          </div>

          <div className="input-box">
            <span className="input-label">Price ($)</span>
            <input
              value={eventPrice}
              placeholder="Event Price"
              type="number"
              onChange={(e) => setEventPrice(e.target.value)}
              // required
            />
          </div>

          {/* <div className="input-box">
            <span className="input-label">Add Tags</span>

            <div className="input-checkbox-container">
              <input
                value={eventLocation}
                className="input-checkbox"
                type="checkbox"
                onChange={(e) => setEventLocation(e.target.value)}
                required
              />
              <span className="input-checkbox-label">Sports</span>
            </div>
          </div> */}

          <div className="button">
            <input type="submit" value="Create Event" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
