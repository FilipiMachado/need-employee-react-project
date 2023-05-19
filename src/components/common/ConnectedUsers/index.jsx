import PropTypes from "prop-types";

export default function ConnectedUsers({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.headline}</p>
    </div>
  );
}

ConnectedUsers.propTypes = {
  user: PropTypes.object.isRequired,
};
