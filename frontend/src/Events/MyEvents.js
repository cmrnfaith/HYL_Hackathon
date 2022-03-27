import { useState, useEffect } from "react";

const MyEvents = ({ user }) => {
  const [events, setEvents] = useState([]);

  const deleteEvent = (event) => {
    console.log(event);
  };

  useEffect(() => {
    console.log(user);

    var url = "/events/" + user.username;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "applcation/json",
      },
      credentials: "include",
    })
      .then(async (res) => {
        if (res.status === 200) {
          var response = await res.json();
          console.log(response);
          setEvents(response.result);
        } else if (res.status === 401) {
        } else {
          console.log("error fetching events");
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    <div className="events-page-container">
      <div className="events-container">
        <h1 className="title">
          My Events: <span>{user.username}</span>
        </h1>
        <div className="event-list-items">
          {events.map((event) => (
            <div className="event-container">
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

              <button
                className="delete-event-button"
                onClick={() => {
                  deleteEvent(event);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
