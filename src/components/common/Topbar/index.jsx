import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";

import "./index.scss";
import NployeeLogo from "../../../assets/main-logo.png";

export default function Topbar() {
  return (
    <div className="topbar-main">
      <img className="main-logo" src={NployeeLogo} alt="Main Logo" />
      <div className="icons-wrapper">
        <AiOutlineHome size={25} />
        <AiOutlineUserSwitch size={25} />
        <BsFillBriefcaseFill size={25} />
      </div>
    </div>
  );
}
