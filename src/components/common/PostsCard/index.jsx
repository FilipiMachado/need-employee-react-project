import PropTypes from "prop-types";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../../../api/FirestoreAPI";

import LikeButton from "../LikeButton";

import { BsPencil, BsTrash } from "react-icons/bs";

import "./index.scss";

export default function PostsCard({ posts, getEditData }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    getConnections(currentUser?.userId, posts.userId, setIsConnected);
  }, [currentUser?.userId, posts.userId]);

  //console.log(currentUser?.userId)
  //console.log(posts.userId)
  console.log(isConnected);

  return (
    <div className="posts-card">
      <div className="post-image-wrapper">
        {currentUser?.userId === posts?.userId ? (
          <div className="action-wrapper">
            <BsPencil
              onClick={() => getEditData(posts)}
              size={20}
              className="action-icon edit"
              title="Edit Post"
            />
            <BsTrash
              onClick={() => deletePost(posts)}
              size={20}
              className="action-icon remove"
              title="Remove Post"
            />
          </div>
        ) : (
          <>
            <div></div>
          </>
        )}

        <div className="profile-info-container">
          <img
            alt="profile-image"
            className="profile-image"
            src={
              allUsers
                .filter((item) => item.userId === posts.userId)
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
              {allUsers.filter((user) => user.id === posts.userId)[0]?.name}
            </p>
            <p className="headline-text">
              {allUsers.filter((user) => user.id === posts.userId)[0]?.headline}
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
