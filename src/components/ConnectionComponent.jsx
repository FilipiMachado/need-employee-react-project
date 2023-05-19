//import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { getAllUsers } from "../api/FirestoreAPI";

import ConnectedUsers from "./common/ConnectedUsers";

import "../Sass/ConnectionComponent.scss";

export default function ConnectionComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div className="connection-component">
      {users.map((user) => {
        return <ConnectedUsers user={user} key={user.id} />;
      })}
    </div>
  );
}

ConnectionComponent.propTypes = {};
