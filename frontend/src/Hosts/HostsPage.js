import { useState, useEffect } from "react";
import HostList from "./HostList";

const HostsPage = ({ user }) => {
  const [hosts, setHosts] = useState([]);

  function update_hosts() {
    var url = "/hosts";
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
          setHosts(response.result);
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
    update_hosts();
  }, []);
  return (
    <div className="hosts-page-container">
      <div className="hosts-container">
        <h1 className="title">All Hosts</h1>
        <HostList hosts={hosts} user={user} update_hosts={update_hosts} />
      </div>
    </div>
  );
};

export default HostsPage;
