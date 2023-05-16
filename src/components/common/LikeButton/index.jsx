import PropTypes from "prop-types";
import { useMemo, useState } from "react";

import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
import {
  likePost,
  getLikesByUser,
  postComment,
  getComments,
} from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";

import "./index.scss";

export default function LikeButton({ userId, postId }) {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  const getComment = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    postComment(postId, comment, getCurrentTimeStamp("LLL"));
    setComment("");
  };

  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getComments(postId);
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

        <div onClick={() => setShowCommentBox(true)} className="likes-wrapper">
          {
            <AiOutlineComment
              className={showCommentBox ? "purple-icon" : "black-icon"}
              size={25}
            />
          }
          <p className={showCommentBox ? "purple-icon" : "black-icon"}>
            Comment
          </p>
        </div>
      </div>

      {showCommentBox ? (
        <>
          <input
            onChange={getComment}
            placeholder="Add a Comment"
            className="comment-input"
            name="comment"
            value={comment}
          />
          <button onClick={addComment} className="add-comment-btn">
            Add Comment
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

LikeButton.propTypes = {
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};
