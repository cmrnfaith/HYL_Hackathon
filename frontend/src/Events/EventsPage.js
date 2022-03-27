import { useState, useEffect } from "react";
import EventList from "./EventList";

const EventsPage = ({ user }) => {
  const [events, setEvents] = useState([]);

  function updateEventList() {
    var url = "/events";
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
  }

  function updateEvents() {
    var url = "/events";
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
  }
  useEffect(() => {
    updateEvents();
  }, []);
  return (
    <div className="events-page-container">
      <div className="events-container">
        <h1 className="title">Latest Events</h1>
        <EventList
          events={events}
          user={user}
          updateEventList={updateEventList}
        />
      </div>
    </div>
  );
};

export default EventsPage;
