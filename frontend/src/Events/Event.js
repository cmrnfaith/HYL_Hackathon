import React, { useState } from "react";
import { useHistory } from "react-router";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Event = ({ event, user }) => {
  const history = useHistory();
  const [liked, setLiked] = useState(event.liked);
  function viewEvent() {
    var url = "/event/" + event.eventID;
    history.push(url);
  }

  function submitLike() {
    console.log("submit like");
    var username = user.username;
    var eventID = event.eventID;
    var url = "/user/likes";
    if (liked) {
      var Method = "DELETE";
    } else {
      var Method = "POST";
    }
    setLiked(!liked);

    fetch(url, {
      method: Method,
      headers: {
        "Content-Type": "application/json",
        Accept: "applcation/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, eventID }),
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
  }
  return (
    <div className="event-container">
      <div className="content">
        <div onClick={viewEvent}>
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
        </div>
        <div className="like-button" onClick={submitLike}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
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
