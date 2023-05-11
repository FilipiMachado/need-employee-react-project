import PropTypes from "prop-types";
import { useState } from "react";

import { editProfile } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState({});
  const getInput = (e) => {
    let { name, value } = e.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfile = async () => {
    await editProfile(currentUser?.userId, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card">
      <div className="edit-btn-wrapper">
        <button onClick={onEdit} className="edit-btn">
          Cancel
        </button>
      </div>

      <div className="edit-profile-inputs">
        <span className="title-text">Update Profile</span>

        <input 
          onChange={getInput} 
          type="text" 
          placeholder="Name" 
          name="name" 
        />
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
          Save
        </button>
      </div>
    </div>
  );
}

ProfileEdit.propTypes = {
  onEdit: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};
