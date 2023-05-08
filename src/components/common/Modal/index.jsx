import { Modal } from "antd";
import PropTypes from "prop-types";

import "./index.scss";

const NewPostModal = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <input className="new-post-modal-input" placeholder="Connect to others through your thoughts." type="text"/>
      </Modal>
    </>
  );
};

NewPostModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default NewPostModal;
