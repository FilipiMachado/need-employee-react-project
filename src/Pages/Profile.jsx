import PropTypes from "prop-types";

import ProfileComponent from "../components/ProfileComponent";

export default function Profile({ currentUser }) {
  return <ProfileComponent currentUser={currentUser} />;
}

Profile.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
