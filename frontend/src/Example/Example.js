import React, { useEffect, useState } from "react";

const Example = () => {
  const [strat_name, setStrat_name] = useState("");
  const [candlestick_interval, setCandlestick_interval] = useState("1");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");

  const [today, setToday] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // submitStrategy();
    setStrat_name("");
    setCandlestick_interval("1");
    setStart_time("");
    setEnd_time("");
  };

  return (
    <div className="create-event-page-container">
      <div className="create-event-container">
        <form className="create-event-form" onSubmit={onSubmit}>
          <h1 className="title">Create an Event</h1>

          <div className="input-box">
            <span className="details">Event Name</span>
            <input
              value={strat_name}
              type="text"
              placeholder="Strategy Name (e.g Tendie Town)"
              onChange={(e) => setStrat_name(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <span className="details">Event Description</span>
            <textarea></textarea>
          </div>

          <div className="input-box">
            <span className="details">Add a Date and Time</span>
            <input
              value={start_time}
              type="date"
              min="2012-01-01"
              max={today}
              onChange={(e) => setStart_time(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <span className="details">Event Location</span>
            <input
              value={end_time}
              type="date"
              min="2012-01-01"
              max={today}
              onChange={(e) => setEnd_time(e.target.value)}
              required
            />
          </div>

          <div className="button">
            <input type="submit" value="Create Strategy" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Example;
