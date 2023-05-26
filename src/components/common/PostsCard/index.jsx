import PropTypes from "prop-types";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../../../api/FirestoreAPI";
import LikeButton from "../LikeButton";
import "./index.scss";

export default function PostsCard({ posts, id, getEditData }) {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [imageModal, setImageModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    getConnections(currentUser.id, posts.userId, setIsConnected);
  }, [currentUser.id, posts.userId]);

  return isConnected || currentUser.id === posts.userID ? (
    <div className="posts-card" key={id}>
      <div className="post-image-wrapper">
        {currentUser.id === posts.userId ? (
          <div className="action-wrapper">
            <BsPencil
              size={20}
              className="action-icon edit"
              onClick={() => getEditData(posts)}
            />
            <BsTrash
              size={20}
              className="action-icon remove"
              onClick={() => deletePost(posts.id)}
            />
          </div>
        ) : (
          <></>
        )}

        <img
          alt="profile-image"
          className="profile-image"
          src={
            allUsers
              .filter((item) => item.id === posts.userId)
              .map((item) => item.imageLink)[0]
          }
        />
        <div>
          <p
            className="name-text"
            onClick={() =>
              navigate("/profile", {
                state: { id: posts?.userId, email: posts.userEmail },
              })
            }
          >
            {allUsers.filter((user) => user.id === posts.userId)[0]?.name}
          </p>
          <p className="headline-text">
            {allUsers.filter((user) => user.id === posts.userId)[0]?.headline}
          </p>
          <p className="timestamp-text">{posts.timeStamp}</p>
        </div>
      </div>
      {posts.postImage ? (
        <img
          onClick={() => setImageModal(true)}
          src={posts.postImage}
          className="post-image"
          alt="post-image"
        />
      ) : (
        <></>
      )}
      <p
        className="status-text"
        dangerouslySetInnerHTML={{ __html: posts.status }}
      ></p>

      <LikeButton
        userId={currentUser?.id}
        postId={posts.id}
        currentUser={currentUser}
      />

      <Modal
        centered
        open={imageModal}
        onOk={() => setImageModal(false)}
        onCancel={() => setImageModal(false)}
        footer={[]}
      >
        <img
          onClick={() => setImageModal(true)}
          src={posts.postImage}
          className="post-image modal"
          alt="post-image"
        />
      </Modal>
    </div>
  ) : (
    <></>
  );
}

PostsCard.propTypes = {
  posts: PropTypes.object.isRequired,
  id: PropTypes.string,
  getEditData: PropTypes.func.isRequired,
};