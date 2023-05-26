import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfilePopup from "../ProfilePopup";
import SearchUsers from "../SearchUsers";
import { getAllUsers } from "../../../api/FirestoreAPI";

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
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  const redirectTo = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const openUser = (user) => {
    navigate("/profile", {
      state: {
        id: user.userId,
        email: user.userEmail,
      },
    });
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase);
      });

      setFilteredUsers(searched);
    } else {
      console.log("user");
    }
  };

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

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

      {searchInput.length === 0 ? (
        <></>
      ) : (
        <div className="search-results">
          {filteredUsers.length === 0 ? (
            <div>No Results Found</div>
          ) : (
            filteredUsers.map((user) => (
              <div
                onClick={() => openUser(user)}
                className="search-wrapper"
                key={user.userId}
              >
                <img src={user.imageLink} alt="Profile Photo" />
                <p className="username-text">{user.name}</p>
              </div>
            ))
          )}
        </div>
      )}

      {isSearching ? (
        <SearchUsers
          setIsSearching={setIsSearching}
          setSearchInput={setSearchInput}
        />
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
