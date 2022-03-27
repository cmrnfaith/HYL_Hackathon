import React from "react";
import { useHistory } from "react-router";

const Host = ({ host }) => {
  const history = useHistory();
  function viewHost() {
    var url = "/host/" + host.hostName;
    history.push(url);
  }
  return (
    <div className="host-container" onClick={viewHost}>
      <div className="title">{host.hostName}</div>
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
export default Host;
