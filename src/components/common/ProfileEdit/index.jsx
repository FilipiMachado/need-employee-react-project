import PropTypes from "prop-types";
import { useState } from "react";

import { editProfile } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);
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

        <label>Name</label>
        <input 
          onChange={getInput} 
          type="text" 
          placeholder="Name" 
          name="name"
          value={editInputs.name} 
        />

        <label>Headline</label>
        <input
          onChange={getInput}
          type="text"
          placeholder="Headline"
          name="headline"
          value={editInputs.headline} 
        />

        <label>Location</label>
        <input
          onChange={getInput}
          type="text"
          placeholder="Location"
          name="location"
          value={editInputs.location} 
        />

        <label>Company</label>
        <input
          onChange={getInput}
          type="text"
          placeholder="Company"
          name="company"
          value={editInputs.company} 
        />

        <label>College</label>
        <input
          onChange={getInput}
          type="text"
          placeholder="College"
          name="college"
          value={editInputs.college} 
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
