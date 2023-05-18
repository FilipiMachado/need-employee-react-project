import PropTypes from "prop-types";

import PostStatus from "./common/PostStatus";

export default function ConnectionComponent({ currentUser }) {
  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser}/>
    </div>
  );
}

ConnectionComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};