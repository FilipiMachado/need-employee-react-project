import PropTypes from "prop-types";
import { useState } from "react";

import "./index.scss";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState({});
  const getInput = (e) => {
    let { name, value } = e.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfile = () => {
    console.log(currentUser.userId);
  };

  return (
    <div className="profile-card">
      <div className="edit-btn-wrapper">
        <button onClick={onEdit} className="edit-btn">
          Go Back
        </button>
      </div>

      <div className="edit-profile-inputs">
        <input onChange={getInput} type="text" placeholder="Name" name="name" />

        <input
          onChange={getInput}
          type="text"
          placeholder="Headline"
          name="headline"
        />
        <input
          onChange={getInput}
          type="text"
          placeholder="Location"
          name="location"
        />

        <input
          onChange={getInput}
          type="text"
          placeholder="Company"
          name="company"
        />

        <input
          onChange={getInput}
          type="text"
          placeholder="College"
          name="college"
        />

        <button onClick={updateProfile} className="save-btn">
          Save Profile
        </button>
      </div>
    </div>
  );
}

ProfileEdit.propTypes = {
  onEdit: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};
