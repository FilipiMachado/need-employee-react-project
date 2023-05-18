import { Button, Modal } from "antd";
import PropTypes from "prop-types";

import "./index.scss";

const NewPostModal = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  status,
  setStatus,
  isEdit,
  updateStatus,
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
        <input
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          className="new-post-modal-input"
          placeholder="Connect to others through your thoughts."
          type="text"
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
};

export default NewPostModal;
