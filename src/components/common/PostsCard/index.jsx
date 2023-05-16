import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../api/FirestoreAPI";

import LikeButton from "../LikeButton";

import "./index.scss";

export default function PostsCard({ posts }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="posts-card">
      <p
        onClick={() =>
          navigate("/profile", {
            state: { id: posts?.userId, email: posts.userEmail },
          })
        }
        className="name-text"
      >
        {posts.userName}
      </p>

      <p className="timestamp-text">{posts.timeStamp}</p>
      <p className="status-text">{posts.status}</p>

      <LikeButton userId={currentUser?.userId} postId={posts.id}/>
    </div>
  );
}

PostsCard.propTypes = {
  posts: PropTypes.object.isRequired,
};
