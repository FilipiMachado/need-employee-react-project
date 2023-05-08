import { Modal } from "antd";
import PropTypes from "prop-types";

import "./index.scss";

const NewPostModal = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some content</p>
        <p>some content</p>
      </Modal>
    </>
  );
};

NewPostModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};

export default NewPostModal;
