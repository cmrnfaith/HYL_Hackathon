import { useState, useEffect } from "react";
import HostList from "./HostList";

const HostsPage = () => {
  const [hosts, setHosts] = useState([]);
  useEffect(() => {
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
  }, []);
  return (
    <div className="hosts-page-container">
      <div className="hosts-container">
        <h1 className="title">All Hosts</h1>
        <HostList hosts={hosts} />
      </div>
    </div>
  );
};

export default HostsPage;
