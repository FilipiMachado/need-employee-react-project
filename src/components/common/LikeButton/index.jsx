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

export default function LikeButton({ userId, postId, currentUser }) {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  const getComment = (e) => {
    setComment(e.target.value);
  };

  console.log(currentUser?.name)

  const addComment = () => {
    postComment(postId, comment, getCurrentTimeStamp("LLL"), currentUser?.name);
    setComment("");
    setShowCommentBox(false);
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getComments(postId, setComments);
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

        <div
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="likes-wrapper"
        >
          {
            <AiOutlineComment
              className={showCommentBox ? "purple-icon" : "black-icon"}
              size={25}
            />
          }
          <p className={showCommentBox ? "purple-icon" : "black-icon"}>
            Comments
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
        <>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div key={comment.id} className="all-comments">
                  <p className="name-text">{comment.name}</p>
                  <p className="comment-text">{comment.comment}</p>
                  <p className="timestamp-text">{comment.timeStamp}</p>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

LikeButton.propTypes = {
  userId: PropTypes.string,
  postId: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
};
