import { useEffect, useState } from "react";

const EventOverview = (props) => {
  const [event, setEvent] = useState(null);
  var eventID = props.match.params.id;
  useEffect(() => {
    var url = "/event/" + eventID;
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
        } else if (res.status === 401) {
        } else {
          console.log("error fetching event");
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    <div className="event-overview-container">
      {event && (
        <>
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
          <div className="time">
            {new Date(event.date).toLocaleTimeString()}
          </div>{" "}
          */}
          <div className="duration">{event.duration}</div>
          <div className="text">{event.description}</div>
          <div className="attire">{event.attire}</div>
          <div className="membership">{event.membership}</div>
          <div className="price">
            {event.price === 0 ? "Free" : "$" + event.price.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};
export default EventOverview;
