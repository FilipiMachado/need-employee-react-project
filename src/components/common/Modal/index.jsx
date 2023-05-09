import { Button, Modal } from "antd";
import PropTypes from "prop-types";

import "./index.scss";

const NewPostModal = ({ modalOpen, setModalOpen, setStatus }) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" disabled>
            Post
          </Button>,
        ]}
      >
        <input
          onChange={(e) => setStatus(e.target.value)}
          className="new-post-modal-input"
          placeholder="Connect to others through your thoughts."
          type="text"
        />
        <button className="add-post-btn">Post</button>
      </Modal>
    </>
  );
};

NewPostModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default NewPostModal;
