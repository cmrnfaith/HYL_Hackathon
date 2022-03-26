import Event from "./Event";
const EventList = ({ events }) => {
  return (
    <div className="event-list-container">
      <h1 className="title">Events</h1>
      <div className="event-list-items">
        {events.map((event) => (
          <Event key={event.eventID} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
