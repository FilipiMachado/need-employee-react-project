import { useNavigate } from "react-router-dom";

import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";

import "./index.scss";
import NployeeLogo from "../../../assets/main-logo.png";

export default function Topbar() {
  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <div className="topbar-main">
      <img className="main-logo" src={NployeeLogo} alt="Main Logo" />
      <div className="icons-wrapper">
        <AiOutlineSearch size={25} className="outline-icon" />
        <AiOutlineHome
          size={25}
          className="outline-icon"
          onClick={() => {
            redirectTo("/home");
          }}
        />
        <AiOutlineUserSwitch
          size={25}
          className="outline-icon"
          onClick={() => {
            redirectTo("/profile");
          }}
        />
        <BsFillBriefcaseFill size={25} className="outline-icon" />
        <AiOutlineMessage size={25} className="outline-icon" />
        <AiOutlineBell size={25} className="outline-icon" />
        <AiOutlineUser size={25} className="outline-icon user-icon" />
      </div>
    </div>
  );
}
