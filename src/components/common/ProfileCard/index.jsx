import PropTypes from "prop-types";

import "./index.scss";

export default function ProfileCard({ currentUser }) {
  return <div className="profile-card">{currentUser}</div>;
}

ProfileCard.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
