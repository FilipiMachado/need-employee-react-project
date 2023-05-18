import PropTypes from "prop-types";
import { Button, Modal, Progress } from "antd";

import "./index.scss";

export default function FileUploadModal({
  modalOpen,
  setModalOpen,
  getImage,
  uploadImage,
  currentImage,
  progress,
}) {
  return (
    <div>
      <Modal
        title="Add a Profile Photo"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        Footer={[
          <Button
            disabled={currentImage.name ? false : true}
            key="submit"
            type="primary"
            onClick={uploadImage}
          >
            Upload Profile Photo
          </Button>,
        ]}
      >
        <div className="image-upload-wrapper">
          <label className="upload-btn" htmlFor="upload-image">
            Add a Photo
          </label>
          <p className="img-name-text">{currentImage.name}</p>

          <div className="progress-bar">
            <Progress type="line" percent={progress} />
          </div>

          <input hidden id="upload-image" type={"file"} onChange={getImage} />
        </div>
      </Modal>
    </div>
  );
}

FileUploadModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  getImage: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  currentImage: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
};
