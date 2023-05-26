import PropTypes from "prop-types";

import { Button, Modal } from "antd";
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
}) => {
  return (
    <>
      <Modal
        title="Create a New Post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
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
        <textarea
          rows={3}
          cols={3}
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          className="new-post-modal-input"
          placeholder="Connect to others through your thoughts."
          type="text"
        />

        {postImage.length > 0 ? (
          <img src={postImage} alt="Image Uploaded" />
        ) : (
          <></>
        )}

        <label htmlFor="picture-upload" title="Upload Image">
          <AiOutlinePicture size={32} className="picture-icon" />
        </label>
        <input
          onClick={(e) => uploadPostImage(e.target.files[0], setPostImage)}
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
};

export default NewPostModal;
