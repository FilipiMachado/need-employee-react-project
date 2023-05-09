import { useState, useMemo } from "react";
import NewPostModal from "../Modal";
import { PostStatusData, getPosts } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function PostStatus() {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  const sendStatus = async () => {
    await PostStatusData(status);
    await setNewPostModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getPosts(setAllStatus);
  }, []);

  console.log(allStatus);

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
        {allStatus.map((status) => {
          return (
            <>
              <p>{status.status}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
