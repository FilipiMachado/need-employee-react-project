import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import NewPostModal from "../Modal";
import PostsCard from "../PostsCard";

import { uploadPostImage } from "../../../api/ImageUpload";
import {
  postStatusData,
  getPosts,
  updatePost,
} from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getUniqueId";

import "./index.scss";

export default function PostStatus({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail");
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      email: userEmail,
      userName: currentUser.name,
      postId: getUniqueId(),
      userId: currentUser.userId,
      postImage: postImage,
    };
    await postStatusData(object);
    await setNewPostModalOpen(false);
    await setIsEdit(false);
    await setStatus("");
  };

  const getEditData = (posts) => {
    setNewPostModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status);
    setNewPostModalOpen(false);
  };

  useMemo(() => {
    getPosts(setAllStatus);
  }, []);

  return (
    <div className="post-status-wrapper">
      <div className="user-details">
        <div style={{ maxHeight: "80px" }}>
          <img
            className="user-profile-image"
            src={currentUser.imageLink}
            alt="profile-photo"
          />
        </div>
        <p className="user-name-text">{currentUser.name}</p>
        <p className="user-headline-text">{currentUser.headline}</p>
      </div>

      <div className="post-status">
        <button
          className="show-modal-btn"
          onClick={() => {
            setIsEdit(false);
            setNewPostModalOpen(true);
          }}
        >
          New Post
        </button>
      </div>

      <NewPostModal
        status={status}
        setStatus={setStatus}
        modalOpen={newPostModalOpen}
        setModalOpen={setNewPostModalOpen}
        sendStatus={sendStatus}
        isEdit={isEdit}
        updateStatus={updateStatus}
        uploadPostImage={uploadPostImage}
        postImage={postImage}
        setPostImage={setPostImage}
      />

      <div>
        {allStatus.length > 0 ? (
          allStatus.map((posts, idx) => {
            return (
              <PostsCard key={idx} posts={posts} getEditData={getEditData} />
            );
          })
        ) : (
          <p className="no-posts-found">
            You have no posts yet. Wanna add a new one?
          </p>
        )}
      </div>
    </div>
  );
}

PostStatus.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
