import { useState, useMemo } from "react";

import NewPostModal from "../Modal";
import PostsCard from "../PostsCard";

import { PostStatusData, getPosts } from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";

import "./index.scss";

export default function PostStatus() {
  let userEmail = localStorage.getItem("userEmail");
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      email: userEmail,
    };
    await PostStatusData(object);
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
        {allStatus.map((posts, idx) => {
          return <PostsCard key={idx} posts={posts} />;
        })}
      </div>
    </div>
  );
}
