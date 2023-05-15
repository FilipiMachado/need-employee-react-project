import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import {
  //getPosts,
  getSingleStatus,
  getSingleUser,
} from "../../../api/FirestoreAPI";
import { useLocation } from "react-router-dom";

import PostsCard from "../PostsCard";

import { HiOutlinePencil } from 'react-icons/hi'
import "./index.scss";

export default function ProfileCard({ currentUser, onEdit }) {
  let location = useLocation();
  const [allStatus, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});

  useMemo(() => {
    //getPosts(setAllStatus);

    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  console.log(currentProfile);

  return (
    <>
      <div className="profile-card">
        <div className="edit-btn-wrapper">
          <HiOutlinePencil onClick={onEdit} className="edit-btn-icon" title="Edit Profile"/>
          {/* <button onClick={onEdit} className="edit-btn">
            Edit
          </button> */}
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

      {/* <div className="profile-status-main">
        {allStatus
          .filter((item) => {
            return item.userEmail === localStorage.getItem("userEmail");
          })
          .map((posts, idx) => {
            return <PostsCard key={idx} posts={posts} />;
          })}
      </div> */}

      <div className="profile-posts-container">
        {allStatus.length > 0 ? (
          allStatus.map((posts, idx) => {
            return <PostsCard key={idx} posts={posts} />;
          })
        ) : (
          <p className="no-posts-found">
            You have no posts yet. Wanna add a new one?
          </p>
        )}
      </div>
    </>
  );
}

ProfileCard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};
