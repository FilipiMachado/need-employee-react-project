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
  setCurrentImage,
  uploadPostImage,
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

        <label htmlFor="picture-upload" title="Upload Image">
          <AiOutlinePicture size={32} className="picture-icon" />
        </label>
        <input
          onClick={(e) => setCurrentImage(e.target.files[0])}
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
  setCurrentImage: PropTypes.func.isRequired,
};

export default NewPostModal;
