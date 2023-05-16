import PropTypes from "prop-types";

import { AiOutlineLike } from "react-icons/ai";
import { likePost } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function LikeButton({ userId, postId }) {
  const handleLike = () => {
    likePost(userId, postId);
  };

  return (
    <div onClick={handleLike} className="like-container">
      <AiOutlineLike size={25} />
      <p>Like</p>
    </div>
  );
}

LikeButton.propTypes = {
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};
