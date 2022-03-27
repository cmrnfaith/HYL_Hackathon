import { useEffect, useState } from "react";

const EventOverview = (props) => {
  const [event, setEvent] = useState(null);
  var eventID = props.match.params.id;

  const onClick = () => {
    // window.open("http://10.0.0.126:5000/addToCalender/" + event.eventID);
    console.log(event.eventID);
    var url = "/addToCalender/" + event.eventID;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text",
        Accept: "text",
      },
      credentials: "include",
    })
      .then(async (res) => {
        if (res.status === 200) {
          console.log(res.status);
          console.log(res);
          var response = await res.json();
          console.log(response);
        } else if (res.status === 401) {
          console.log("error fetching event");
        } else {
          console.log("error fetching event");
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  function getEvents() {
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
          // console.log(res);
          var response = await res.json();
          // console.log(response);
          setEvent(response.result[0]);
        } else if (res.status === 401) {
        } else {
          console.log("error fetching event");
        }
      })
      .catch((error) => {
        // Handle error
      });
  }

  useEffect(() => {
    getEvents();
  }, [eventID]);

  return (
    <div className="event-overview-page-container">
      {event && (
        <div className="event-overview-container">
          <div className="title">{event.name}</div>
          <div className="content">
            <table>
              <tbody>
                <tr>
                  <th>Event Date</th>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <th>Event Time</th>
                  <td>{new Date(event.date).toLocaleTimeString()}</td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>{event.duration}</td>
                </tr>
                <tr>
                  <th>Event Location</th>
                  <td>{event.location}</td>
                </tr>

                {event.faculty === "" ? (
                  <tr></tr>
                ) : (
                  <tr>
                    <th>Faculty</th>
                    <td>{event.faculty}</td>
                  </tr>
                )}

                {event.eventType === "" ? (
                  <tr></tr>
                ) : (
                  <tr>
                    <th>Event Type</th>
                    <td>{event.eventType}</td>
                  </tr>
                )}

                <tr>
                  <th>Price</th>
                  <td>{event.price}</td>
                </tr>
                <tr>
                  <th>Permissions</th>
                  <td>{event.private === 0 ? "Public" : "Private"}</td>
                </tr>
                <tr>
                  <th>Membership</th>
                  <td>{event.membership}</td>
                </tr>
                <tr>
                  <th>Attire</th>
                  <td>{event.attire}</td>
                </tr>
              </tbody>
            </table>
            <div className="description">
              <div className="subtitle">Description</div>
              <div className="text">{event.description}</div>
            </div>
            <button className="button-add-to-calender" onClick={onClick}>
              Add to Calender
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default EventOverview;
