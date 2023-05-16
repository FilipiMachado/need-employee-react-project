import PropTypes from "prop-types";
import { useMemo, useState } from "react";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { likePost, getLikesByUser } from "../../../api/FirestoreAPI";

import "./index.scss";

export default function LikeButton({ userId, postId }) {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div onClick={handleLike} className="like-container">
      {liked ? (
        <AiFillLike className="liked-icon" size={25} />
      ) : (
        <AiOutlineLike className="no-liked-icon" size={25} />
      )}
      <p>{liked ? "Liked" : "Like"}</p>
      {likesCount}
    </div>
  );
}

LikeButton.propTypes = {
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};
