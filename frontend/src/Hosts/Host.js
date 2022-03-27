import React, { useState } from "react";
import { useHistory } from "react-router";

const Host = ({ user, host, update_hosts }) => {
  const history = useHistory();
  const [followed, setFollowed] = useState(host.followed);
  function viewHost() {
    var url = "/host/" + host.hostName;
    history.push(url);
  }

  function followHost() {
    console.log("submit like");
    var username = user.username;
    var hostName = host.hostName;
    var url = "/user/follow";
    if (followed) {
      var Method = "DELETE";
    } else {
      var Method = "POST";
    }
    setFollowed(!followed);

    fetch(url, {
      method: Method,
      headers: {
        "Content-Type": "application/json",
        Accept: "applcation/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, hostName }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          update_hosts();
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
