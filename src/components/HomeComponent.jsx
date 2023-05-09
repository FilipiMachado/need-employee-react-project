import PropTypes from "prop-types";

import PostStatus from "./common/PostStatus";

export default function HomeComponent({ currentUser }) {
  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser}/>
    </div>
  );
}

HomeComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};