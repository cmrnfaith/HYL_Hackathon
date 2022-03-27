import React, { useState } from "react";
import { useHistory } from "react-router";

const Host = ({ host }) => {
  const history = useHistory();
  const [followed, setFollowed] = useState(host.followed);
  function viewHost() {
    var url = "/host/" + host.hostName;
    history.push(url);
  }

  function followHost() {
    setFollowed(!followed);
  }
  return (
    <div className="host-container">
      <div onClick={viewHost}>
        <div className="title">{host.hostName}</div>
      </div>
      <div className="follow-button" onClick={followHost}>
        <button>{followed ? "FOLLOWED" : "FOLLOW"}</button>
      </div>
    </div>
  );
};
export default Host;
