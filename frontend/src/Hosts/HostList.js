import Host from "./Host";

const HostList = ({ user, hosts, update_hosts }) => {
  return (
    <div className="host-list-container">
      <div className="host-list-items">
        {hosts.map((host) => (
          <Host
            key={host.hostName}
            host={host}
            user={user}
            update_hosts={update_hosts}
          />
        ))}
      </div>
    </div>
  );
};

export default HostList;
