import PropTypes from "prop-types";

import "./index.scss";

export default function ProfileEdit({ onEdit }) {
  return (
    <div className="profile-card">
      <div className="edit-btn-wrapper">
        <button onClick={onEdit} className="edit-btn">
          Go Back
        </button>
      </div>

      <input type="text" placeholder="Name" />

      <input type="text" placeholder="Headline" />
      <input type="text" placeholder="Location" />

      <input type="text" placeholder="Company" />

      <input type="text" placeholder="College" />
    </div>
  );
}

ProfileEdit.propTypes = {
  onEdit: PropTypes.func.isRequired,
};
