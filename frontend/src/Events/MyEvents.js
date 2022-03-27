import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const MyEvents = ({ user }) => {
  const [events, setEvents] = useState([]);

  const history = useHistory();

  function viewEvent(event) {
    var url = "/event/" + event.eventID;
    history.push(url);
  }

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
        <h1 className="title">My Events</h1>
        <div className="event-list-items">
          {events.map((event) => (
            <div className="event-container" onClick={viewEvent(event)}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
