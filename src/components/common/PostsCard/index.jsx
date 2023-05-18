import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, getAllUsers } from "../../../api/FirestoreAPI";

import LikeButton from "../LikeButton";

import { BsPencil, BsTrash } from "react-icons/bs";

import "./index.scss";

export default function PostsCard({ posts, getEditData }) {
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
        <div className="action-wrapper">
          <BsPencil
            onClick={() => getEditData(posts)}
            size={20}
            className="action-icon edit"
            title="Edit Post"
          />
          <BsTrash
            size={20}
            className="action-icon remove"
            title="Remove Post"
          />
        </div>

        <div className="profile-info-container">
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
  getEditData: PropTypes.func.isRequired,
};
