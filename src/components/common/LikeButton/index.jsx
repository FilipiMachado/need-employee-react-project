import PropTypes from "prop-types";
import { useMemo, useState } from "react";

import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
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
    <div className="like-container">
      <p className="how-many-liked">{likesCount} liked this post</p>
      <div className="hr-line">
        <hr />
      </div>
      <div className="like-comment">
        <div className="likes-wrapper" onClick={handleLike}>
          {liked ? (
            <AiFillLike className="liked-icon" size={25} />
          ) : (
            <AiOutlineLike className="no-liked-icon" size={25} />
          )}

          <p className={liked ? "purple-icon" : "black-icon"}>Like</p>
        </div>

        <div className="likes-wrapper">
          <AiOutlineComment className="liked-icon" size={25} />

          <p className={liked ? "purple-icon" : "black-icon"}>Comment</p>
        </div>
      </div>

      <input className="comment-input" type="text" placeholder="Add a Comment"/>
    </div>
  );
}

LikeButton.propTypes = {
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};
