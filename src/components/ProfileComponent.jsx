import PropTypes from "prop-types";
import { useState } from "react";

import ProfileCard from "./common/ProfileCard";
import ProfileEdit from "./common/ProfileEdit";

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setIsEdit] = useState();

  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <ProfileEdit currentUser={currentUser} onEdit={onEdit} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
}

ProfileComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
