import PropTypes from "prop-types";

import "./index.scss";

export default function Button({ title, onClick }) {
  return (
    <button className="common-btn" onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
