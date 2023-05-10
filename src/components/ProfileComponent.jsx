import PropTypes from "prop-types";

import ProfileCard from "./common/ProfileCard";

export default function ProfileComponent({ currentUser }) {
  return (
    <div>
      <ProfileCard currentUser={currentUser} />
    </div>
  );
}

ProfileComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
