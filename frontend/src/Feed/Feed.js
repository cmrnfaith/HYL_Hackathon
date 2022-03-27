import { useState, useEffect } from "react";
import EventList from "../Events/EventList";

const Feed = ({ user }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    var url = "/user/" + user.username + "/followedLikes";
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
        <h1 className="title">Your Feed</h1>
        <EventList events={events} />
      </div>
    </div>
  );
};

export default Feed;
