import PropTypes from "prop-types";

import "./index.scss";

export default function ProfileCard({ currentUser, onEdit }) {
  return (
    <>
      {<div className="profile-card">
        <div className="edit-btn-wrapper">
          <button onClick={onEdit} className="edit-btn">
            Edit
          </button>
        </div>
        <h3 className="username-text">{currentUser.name}</h3>
        <p className="email-text">{currentUser.email}</p>
      </div>}
    </>
  );
}

ProfileCard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};
