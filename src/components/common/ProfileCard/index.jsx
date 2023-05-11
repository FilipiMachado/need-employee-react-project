import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import { getPosts } from "../../../api/FirestoreAPI";

import PostsCard from "../PostsCard";

import "./index.scss";

export default function ProfileCard({ currentUser, onEdit }) {
  const [allStatus, setAllStatus] = useState([]);

  useMemo(() => {
    getPosts(setAllStatus);
  }, []);

  return (
    <>
      <div className="profile-card">
        <div className="edit-btn-wrapper">
          <button onClick={onEdit} className="edit-btn">
            Edit
          </button>
        </div>

        <div className="profile-info-container">
          <div className="info-left-wrapper">
            <h3 className="username-text">{currentUser.name}</h3>
            <p className="heading-text">{currentUser.headline}</p>
            <p className="location-text">{currentUser.location}</p>
          </div>
          <div className="info-right-wrapper">
            <p className="college-text">{currentUser.college}</p>
            <p className="company-text">{currentUser.location}</p>
          </div>
        </div>
      </div>

      <div className="profile-status-main">
        {allStatus.filter((item) => {
          return item.userEmail === localStorage.getItem("userEmail");
        }).length > 0 ? (
          allStatus
            .filter((item) => {
              return item.userEmail === localStorage.getItem("userEmail");
            })
            .map((posts, idx) => {
              return <PostsCard key={idx} posts={posts} />;
            })
        ) : (
          <p>Não há posts</p>
        )}
      </div>
    </>
  );
}

ProfileCard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};
