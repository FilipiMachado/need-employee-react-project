import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
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
          <React.Fragment key={user.id}></React.Fragment>
        ) : (
          <ConnectedUsers
            key={user.id}
            user={user}
            getCurrentUser={getCurrentUser}
            currentUser={currentUser}
          />
        );
      })}
    </div>
  );
}

ConnectionComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
