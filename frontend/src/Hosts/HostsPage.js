import { useState, useEffect } from "react";
import HostList from "./HostList";

const HostsPage = ({ user }) => {
  const [hosts, setHosts] = useState([]);
  const [filtered_host, setFiltered_host] = useState([]);

  function update_hosts_follows() {
    var username = user.username;
    var url = "/user/" + username + "/follows";
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
          setHosts(response.result.filter((host) => !host.follow));
          setFiltered_host(response.result.filter((host) => host.follow));
        } else if (res.status === 401) {
        } else {
          console.log("error fetching events");
        }
      })
      .catch((error) => {
        // Handle error
      });
  }

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
    if (user.username === "") {
      update_hosts();
    } else {
      update_hosts_follows();
    }
  }, []);

  return (
    <div className="hosts-page-container">
      <div className="hosts-container">
        {filtered_host.length > 0 && (
          <h1 className="subtitle">Followed Hosts</h1>
        )}
        <HostList
          hosts={filtered_host}
          user={user}
          update_hosts={update_hosts_follows}
        />
        <h1 className="subtitle">Other Hosts</h1>
        <HostList
          hosts={hosts.filter((host) => !host.follow)}
          user={user}
          update_hosts={update_hosts_follows}
        />
      </div>
    </div>
  );
};

export default HostsPage;
