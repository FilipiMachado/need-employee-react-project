import PropTypes from "prop-types";

import { AiOutlineCloseCircle } from "react-icons/ai";

import "./index.scss";

export default function SearchUsers({ setIsSearching, setSearchInput }) {
  return (
    <div className="search-users">
      <input
        type="text"
        placeholder="Search others and connect..."
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <AiOutlineCloseCircle
        onClick={() => {
          setIsSearching(false);
          setSearchInput("");
        }}
        className="close-search-icon"
        size={20}
      />
    </div>
  );
}

SearchUsers.propTypes = {
  setIsSearching: PropTypes.func.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
