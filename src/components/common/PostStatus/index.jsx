import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import NewPostModal from "../Modal";
import PostsCard from "../PostsCard";

import { postStatusData, getPosts } from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getUniqueId";

import "./index.scss";

export default function PostStatus({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail");
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      email: userEmail,
      userName: currentUser.name,
      postId: getUniqueId(),
    };
    await postStatusData(object);
    await setNewPostModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getPosts(setAllStatus);
  }, []);

  return (
    <div className="post-status-wrapper">
      <div className="post-status">
        <button
          className="show-modal-btn"
          onClick={() => setNewPostModalOpen(true)}
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
      />

      <div>
        {allStatus.length > 0 ? (
          allStatus.map((posts, idx) => {
            return <PostsCard key={idx} posts={posts} />;
          })
        ) : (
          <p className="no-posts-found">You have no posts yet. Wanna add a new one?</p>
        )}
      </div>
    </div>
  );
}

PostStatus.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
