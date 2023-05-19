import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { getConnections } from "../../../api/FirestoreAPI";

export default function ConnectedUsers({ user, currentUser, getCurrentUser }) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getConnections(currentUser?.userId, user.userId, setIsConnected);
  }, [currentUser?.userId, user.userId]);

  console.log(isConnected);

  return isConnected ? (
    <></>
  ) : (
    <div
      onClick={() => getCurrentUser(user.userId)}
      className="grid-child-wrapper"
    >
      <p>{user.name}</p>
      <p>{user.headline}</p>
    </div>
  );
}

ConnectedUsers.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};
