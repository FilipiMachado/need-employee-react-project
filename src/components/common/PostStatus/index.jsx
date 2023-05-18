import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import NewPostModal from "../Modal";
import PostsCard from "../PostsCard";

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

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      email: userEmail,
      userName: currentUser.name,
      postId: getUniqueId(),
      userId: currentUser.userId,
    };
    await postStatusData(object);
    await setNewPostModalOpen(false);
    setIsEdit(false);
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

  console.log(currentUser);

  return (
    <div className="post-status-wrapper">
      <div className="user-details">
        <img src="" alt="" />
        <p>{currentUser.name}</p>
        <p>{currentUser.headline}</p>
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
