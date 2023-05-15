import PropTypes from "prop-types";
import { useState } from "react";

import { editProfile } from "../../../api/FirestoreAPI";
import { AiOutlineClose } from "react-icons/ai";

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
        <AiOutlineClose onClick={onEdit} className="edit-btn"/>
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

        <label>Website</label>
        <input
          onChange={getInput}
          type="text"
          placeholder="Website"
          name="website"
          value={editInputs.website}
        />

        <label>About</label>
        <textarea
          className="common-textarea"
          placeholder="About Me"
          onChange={getInput}
          rows={4}
          cols={5}
          name="aboutMe"
          value={editInputs.aboutMe}
        ></textarea>

        <label>Skills</label>
        <input
          onChange={getInput}
          type="text"
          placeholder="Your Skills"
          name="skills"
          value={editInputs.skills}
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
