import Host from "./Host";

const HostList = ({ hosts }) => {
  return (
    <div className="host-list-container">
      <div className="host-list-items">
        {hosts.map((host) => (
          <Host key={host.hostName} host={host} />
        ))}
      </div>
    </div>
  );
};

export default HostList;