import { useState } from 'react'
import NewPostModal from "../Modal";

import "./index.scss";

export default function PostStatus() {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);

  return (
    <div className="post-status-wrapper">
      <div className="post-status">
        <button className="show-modal-btn" onClick={() => setNewPostModalOpen(true)}>New Post</button>
      </div>
      <NewPostModal modalOpen={newPostModalOpen} setModalOpen={setNewPostModalOpen}/>
    </div>
  );
}
