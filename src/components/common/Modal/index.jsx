import PropTypes from "prop-types";
import { useState } from "react";

import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";

import "./index.scss";

const NewPostModal = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  status,
  setStatus,
  isEdit,
  updateStatus,
  uploadPostImage,
  postImage,
  setPostImage,
  currentPost,
}) => {
  console.log(currentPost?.postImage)

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Modal
        title="Create a New Post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
          setPostImage("");
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
          setPostImage("");
        }}
        footer={[
          <Button
            className="post-btn"
            onClick={isEdit ? updateStatus : sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "Update" : "Post"}
          </Button>,
        ]}
      >
        <div className="posts-body">
          <textarea
            rows={3}
            cols={3}
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            className="new-post-modal-input"
            placeholder="Connect to others through your thoughts."
            type="text"
          />

          {progress === 0 || progress === 100 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress type="line" percent={progress} />
            </div>
          )}
          {postImage.length > 0 ? (
            <img
              className="preview-image"
              src={postImage}
              alt="Image Uploaded"
            />
          ) : (
            <></>
          )}
        </div>

        <label htmlFor="picture-upload" title="Upload Image">
          <AiOutlinePicture size={32} className="picture-icon" />
        </label>
        <input
          onClick={(e) =>
            uploadPostImage(e.target.files[0], setPostImage, setProgress)
          }
          hidden
          id="picture-upload"
          type={"file"}
        />
      </Modal>
    </>
  );
};

NewPostModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  sendStatus: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  updateStatus: PropTypes.func.isRequired,
  uploadPostImage: PropTypes.func.isRequired,
  setPostImage: PropTypes.func.isRequired,
  postImage: PropTypes.string.isRequired,
  currentPost: PropTypes.object.isRequired,
};

export default NewPostModal;
