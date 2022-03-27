import { useState, useEffect } from "react";
import Event from "./Event";

const MyEvents = ({ user }) => {
  const [events, setEvents] = useState([]);

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
            <Event key={event.eventID} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
