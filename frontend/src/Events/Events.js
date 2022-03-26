import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    var url = "/events";
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
          var result = await res.json();
          console.log(result);
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
    <div className="events-page-container">
      <h1>Events Page</h1>
    </div>
  );
};

export default Events;
