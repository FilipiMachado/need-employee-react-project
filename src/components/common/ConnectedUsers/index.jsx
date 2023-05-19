import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { getConnections } from "../../../api/FirestoreAPI";

import { AiOutlineUsergroupAdd } from "react-icons/ai";

export default function ConnectedUsers({ user, currentUser, getCurrentUser }) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getConnections(currentUser?.userId, user.userId, setIsConnected);
  }, [currentUser?.userId, user.userId]);

  return isConnected ? (
    <></>
  ) : (
    <div className="grid-child-wrapper">
      <img src={user.imageLink} alt="" />
      <p className="username-text">{user.name}</p>
      <p className="headline-text">{user.headline}</p>

      <button onClick={() => getCurrentUser(user.userId)}>
        <AiOutlineUsergroupAdd size={20} className="add-icon"/>
        Connect
      </button>
    </div>
  );
}

ConnectedUsers.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};
