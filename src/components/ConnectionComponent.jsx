import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";

import ConnectedUsers from "./common/ConnectedUsers";

import "../Sass/ConnectionComponent.scss";

export default function ConnectionComponent({ currentUser }) {
  const [users, setUsers] = useState([]);

  const getCurrentUser = (id) => {
    addConnection(currentUser?.userId, id);
  };

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div className="connection-component">
      {users.map((user) => {
        return user.userId === currentUser.userId ? (
          <></>
        ) : (
          <ConnectedUsers
            key={user.id}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        );
      })}
    </div>
  );
}

ConnectionComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
