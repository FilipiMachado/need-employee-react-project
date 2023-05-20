import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfilePopup from "../ProfilePopup";
import SearchUsers from "../SearchUsers";

import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import NployeeLogo from "../../../assets/main-logo.png";

import "./index.scss";

export default function Topbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const redirectTo = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup
            setIsSearching={setIsSearching}
            setSearchInput={setSearchInput}
          />
        </div>
      ) : (
        <></>
      )}

      <img
        onClick={() => navigate("/")}
        className="main-logo"
        src={NployeeLogo}
        alt="Main Logo"
      />

      <div className="search-results">asdasd</div>

      {isSearching ? (
        <SearchUsers />
      ) : (
        <div className="icons-wrapper">
          <AiOutlineSearch
            onClick={() => setIsSearching(true)}
            size={25}
            className="outline-icon"
          />
          <AiOutlineHome
            title="Home"
            size={25}
            className="outline-icon"
            onClick={() => {
              redirectTo("/home");
            }}
          />
          <AiOutlineUserSwitch
            title="Connect"
            size={25}
            className="outline-icon"
            onClick={() => {
              redirectTo("/connect");
            }}
          />
          <BsFillBriefcaseFill size={25} className="outline-icon" />
          <AiOutlineMessage size={25} className="outline-icon" />
          <AiOutlineBell size={25} className="outline-icon" />
          <AiOutlineUser
            size={25}
            className="outline-icon user-icon"
            onClick={displayPopup}
            title="User Profile"
          />
        </div>
      )}
    </div>
  );
}
