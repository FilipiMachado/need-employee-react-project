import PropTypes from "prop-types";

import "./index.scss";

export default function PostsCard({ posts }) {
  return (
    <div className="posts-card">
      <p className="name-text">{posts.userName}</p>
      <p className="timestamp-text">{posts.timeStamp}</p>
      <p className="status-text">{posts.status}</p>
    </div>
  );
}

PostsCard.propTypes = {
  posts: PropTypes.object.isRequired,
};
