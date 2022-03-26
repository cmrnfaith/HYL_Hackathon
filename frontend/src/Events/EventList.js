const EventList = ({ events }) => {
  return (
    <div className="event-list-container">
      <h1 className="title">Events</h1>;
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Attire</th>
            <th>Date</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Event Type</th>
            <th>Faculty</th>
            <th>Location</th>
            <th>Membership Required</th>
            <th>Price</th>
            <th>Private</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.eventID}>
              <td>{event.name}</td>
              <td>{event.attire}</td>
              <td>{new Date(event.date)}</td>
              <td>{event.description}</td>
              <td>{event.duration}</td>
              <td>{event.eventType}</td>
              <td>{event.faculty}</td>
              <td>{event.location}</td>
              <td>{event.membership}</td>
              <td>
                {event.price === 0 ? "Free" : "$" + event.price.toFixed(2)}
              </td>
              <td>{event.private === 0 ? "Public" : "Private"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
