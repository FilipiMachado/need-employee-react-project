import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, getAllUsers } from "../../../api/FirestoreAPI";

import LikeButton from "../LikeButton";

import "./index.scss";

export default function PostsCard({ posts }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [allUsers, setAllUsers] = useState([]);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  // === posts.UserId.map((item) => item.imageLink)[0]
  return (
    <div className="posts-card">
      <div className="post-image-wrapper">
        <img
          alt="profile-image"
          className="profile-image"
          src={
            allUsers
              .filter((item) => item.id === posts.userId)
              .map((item) => item.imageLink)[0]
          }
        />

        <div className="profile-info-wrapper">
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
        </div>
      </div>

      <p className="status-text">{posts.status}</p>

      <LikeButton
        userId={currentUser?.userId}
        postId={posts.id}
        currentUser={currentUser}
      />
    </div>
  );
}

PostsCard.propTypes = {
  posts: PropTypes.object.isRequired,
};
