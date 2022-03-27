import React from "react";
import { useHistory } from "react-router";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Event = ({ event }) => {
  const history = useHistory();
  function viewEvent() {
    var url = "/event/" + event.eventID;
    history.push(url);
  }

  function submitLike() {
    console.log("submit like");
  }
  return (
    <div className="event-container" onClick={viewEvent}>
      <div className="content">
        <div className="title">{event.name}</div>
        <table>
          <tr>
            <th>Event Date</th>
            <td>{new Date(event.date).toLocaleDateString()}</td>
          </tr>
          <tr>
            <th>Event Time</th>
            <td>{new Date(event.date).toLocaleTimeString()}</td>
          </tr>
          <tr>
            <th>Event Location</th>
            <td>{event.location}</td>
          </tr>

          {event.faculty === "" ? null : (
            <tr>
              <th>Faculty</th>
              <td>{event.faculty}</td>
            </tr>
          )}

          {event.eventType === "" ? null : (
            <tr>
              <th>Event Type</th>
              <td>{event.eventType}</td>
            </tr>
          )}

          <tr>
            <th>Price</th>
            <td>{event.price === 0 ? "Free" : "$" + event.price}</td>
          </tr>
          <tr>
            <th>Permissions</th>
            <td>{event.private === 0 ? "Public" : "Private"}</td>
          </tr>
        </table>
        <div className="like-button" onClick={submitLike}>
          {event.liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
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
  );
};
export default Event;
