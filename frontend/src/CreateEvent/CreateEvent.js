import React, { useState, useEffect } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventType, setEventType] = useState("");

  const [eventPrice, setEventPrice] = useState("");
  const [eventPriceChecked, setEventPriceChecked] = useState(false);

  const [eventFaculty, setEventFaculty] = useState("");
  const [eventFacultyChecked, setEventFacultyChecked] = useState(false);

  const [eventAttire, setEventAttire] = useState("");
  const [eventAttireChecked, setEventAttireChecked] = useState(false);

  const [eventMembershipRequirement, setEventMembershipRequirement] =
    useState("");
  const [
    eventMembershipRequirementChecked,
    setEventMembershipRequirementChecked,
  ] = useState(false);

  const [eventPublic, setEventPublic] = useState("");
  const [eventPublicChecked, setEventPublicChecked] = useState(false);

  const [today, setToday] = useState("");

  const handleEventPriceChecked = () => {
    setEventPriceChecked(!eventPriceChecked);
  };

  const handleEventFacultyChecked = () => {
    setEventFacultyChecked(!eventFacultyChecked);
  };

  const handleEventAttireChecked = () => {
    setEventAttireChecked(!eventAttireChecked);
  };

  const handleEventMembershipRequirementChecked = () => {
    setEventMembershipRequirementChecked(!eventMembershipRequirementChecked);
  };

  const handleEventPublicChecked = () => {
    setEventPublicChecked(!eventPublicChecked);
  };

  const getToday = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    setToday(today);
  };

  useEffect(getToday, [today]);

  const onSubmit = (e) => {
    e.preventDefault();

    submitEvent();
  };

  const submitEvent = () => {
    var dateTimeTogether = eventDate + " " + eventTime + ":00";

    console.log({
      eventName,
      eventDescription,
      eventDate,
      eventTime,
      eventDuration,
      eventLocation,
      eventType,
      eventPrice,
      eventFaculty,
      eventAttire,
      eventMembershipRequirement,
      eventPublic,
      dateTimeTogether,
    });

    var url = "/events";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "applcation/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: eventName,
        dateTime: dateTimeTogether,
        location: eventLocation,
        price: eventPrice,
        attire: null,
        membership: eventMembershipRequirement,
        duration: eventDuration,
        private: eventPublic,
        faculty: eventFaculty,
        description: eventDescription,
        eventType: eventType,
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
            <span className="input-label">How long is your event? (Hours)</span>
            <input
              value={eventDuration}
              min="0"
              step="0.5"
              type="number"
              onChange={(e) => setEventDuration(e.target.value)}
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

          <div className="input-box">
            <span className="input-label">Event Type</span>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
            >
              <option value="">Choose an Event Type</option>
              <option value="Sports">Sporting - Dinos Mens Volleyball</option>
              <option value="Sports">Sporting - Dinos Womens Volleyball</option>
              <option value="Sports">Sporting - Dinos Football</option>
              <option value="Sports">Sporting - Dinos Mens Soccer</option>
              <option value="Sports">Sporting - Dinos Womens Soccer</option>
              <option value="Sports">Sporting - Dinos Mens Hockey</option>
              <option value="Sports">Sporting - Dinos Womens Hockey</option>
              <option value="Sports">
                Sporting - Dinos Womens Field Hockey
              </option>
              <option value="Sports">Sporting - Dinos Swimming</option>
              <option value="Sports">Sporting - Dinos Golf</option>
              <option value="Sports">Sporting - Dinos Mens Basketball</option>
              <option value="Sports">Sporting - Dinos Womens Basketball</option>
              <option value="University">University - Student Union</option>
              <option value="University">University - Student Union</option>
              <option value="University">University - Student Union</option>
              <option value="University">University - Student Union</option>
              <option value="University">University - Student Union</option>
              <option value="University">University - Student Union</option>
              <option value="University">University - Student Union</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Club">Club - Digitronics</option>
              <option value="Third Party">Third Party</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {eventPriceChecked ? (
            <div className="input-box">
              <span className="input-label">Price ($)</span>
              <input
                value={eventPrice}
                placeholder="Event Price"
                type="number"
                onChange={(e) => setEventPrice(e.target.value)}
                required
              />
            </div>
          ) : (
            <div></div>
          )}

          {eventFacultyChecked ? (
            <div className="input-box">
              <span className="input-label">Faculty</span>
              <select
                value={eventFaculty}
                onChange={(e) => setEventFaculty(e.target.value)}
                required
              >
                <option value="">Choose a Faculty</option>
                <option value="Engineering">Engineering</option>
                <option value="Business">Business</option>
                <option value="Arts">Arts</option>
                <option value="Science">Science</option>
                <option value="Education">Education</option>
              </select>
            </div>
          ) : (
            <div></div>
          )}

          {eventAttireChecked ? (
            <div className="input-box">
              <span className="input-label">Event Attire</span>
              <select
                value={eventAttire}
                onChange={(e) => setEventAttire(e.target.value)}
                required
              >
                <option value="">Choose an Attire</option>
                <option value="Formal">Formal</option>
                <option value="Business Formal">Business Formal</option>
                <option value="Costume">Costume</option>
                <option value="Other">Other</option>
              </select>
            </div>
          ) : (
            <div></div>
          )}

          {eventMembershipRequirementChecked ? (
            <div className="input-box">
              <span className="input-label">Membership Requirement</span>
              <input
                value={eventMembershipRequirement}
                type="text"
                placeholder="(e.g. ESS Membership)"
                onChange={(e) => setEventMembershipRequirement(e.target.value)}
                required
              />
            </div>
          ) : (
            <div></div>
          )}

          {eventPublicChecked ? (
            <div className="input-box">
              <span className="input-label">Event Public/Private</span>
              <select
                value={eventPublic}
                onChange={(e) => setEventPublic(e.target.value)}
                required
              >
                <option value="">Choose either Public or Private</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          ) : (
            <div></div>
          )}

          <div className="button">
            <input type="submit" value="Create Event" />
          </div>
        </form>

        <div className="create-tags">
          <h1 className="title">Add Tags</h1>

          <div className="input-box">
            <input
              type="checkbox"
              checked={eventPriceChecked}
              onChange={handleEventPriceChecked}
            />
            <span className="input-label">Add a Price</span>
          </div>

          <div className="input-box">
            <input
              type="checkbox"
              checked={eventFacultyChecked}
              onChange={handleEventFacultyChecked}
            />
            <span className="input-label">Add a Faculty</span>
          </div>

          <div className="input-box">
            <input
              type="checkbox"
              checked={eventAttireChecked}
              onChange={handleEventAttireChecked}
            />
            <span className="input-label">Add an Attire</span>
          </div>

          <div className="input-box">
            <input
              type="checkbox"
              checked={eventMembershipRequirementChecked}
              onChange={handleEventMembershipRequirementChecked}
            />
            <span className="input-label">Add a Membership Requirement</span>
          </div>

          <div className="input-box">
            <input
              type="checkbox"
              checked={eventPublicChecked}
              onChange={handleEventPublicChecked}
            />
            <span className="input-label">
              Make the Event Public or Private
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
