import PropTypes from "prop-types";

export default function ConnectedUsers({ user, getCurrentUser }) {
  return (
    <div
      onClick={() => getCurrentUser(user.userId)}
      className="grid-child-wrapper"
    >
      <p>{user.name}</p>
      <p>{user.headline}</p>
    </div>
  );
}

ConnectedUsers.propTypes = {
  user: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};
