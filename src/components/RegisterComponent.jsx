import { useState } from "react";

import { RegisterAPI } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NployeeLogo from "../assets/main-logo.png";
import "../Sass/RegisterComponent.scss";

export default function RegisterComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const registerHandler = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created successfully!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      toast.error("Cannot create your account. Please check the fields!");
    }
  };

  return (
    <div className="main-wrapper">
      <div className="img-wrapper">
        <img src={NployeeLogo} alt="" className="main-logo" />
      </div>

      <div className="login-wrapper">
        <h1 className="heading">Register</h1>
        <p className="sub-heading">Search for new jobs or maybe employees</p>

        <div className="auth-inputs">
          <input
            onChange={(e) => {
              setCredentials({ ...credentials, email: e.target.value });
            }}
            className="common-input"
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value });
            }}
            className="common-input"
            placeholder="Password (8 or more characters)"
            type="password"
          />
        </div>
        <button
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
          onClick={registerHandler}
          className="login-btn"
        >
          Join
        </button>
        <hr
          style={{ padding: "10px 150px" }}
          className="hr-text"
          data-content="OR"
        />
        <div className="google-btn-wrapper">
          <p className="go-to-signup">
            Already have an account?
            <span onClick={() => navigate("/")} className="join-now">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
