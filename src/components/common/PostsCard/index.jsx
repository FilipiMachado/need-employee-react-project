import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./index.scss";

export default function PostsCard({ posts }) {
  const navigate = useNavigate()

  return (
    <div className="posts-card">
      <p onClick={() => navigate("/profile")} className="name-text">{posts.userName}</p>
      <p className="timestamp-text">{posts.timeStamp}</p>
      <p className="status-text">{posts.status}</p>
    </div>
  );
}

PostsCard.propTypes = {
  posts: PropTypes.object.isRequired,
};
