import { useState } from "react";

import { LoginAPI, GoogleSignInAPI /* RegisterAPI */ } from "../api/AuthAPI";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";

import NployeeLogo from "../assets/main-logo.png";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});

  const loginHandler = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res)
      toast.success("Signed In Successfully!")
    } catch (err) {
      console.log(err)
      toast.error("Please check your credentials!")
    }
  };

  const googleSignIn = () => {
    let res = GoogleSignInAPI()
    console.log(res)
  }

  /* const registerHandler = () => {
    try {
      let res = RegisterAPI(credentials.email, credentials.password);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div className="main-wrapper">
      <div className="img-wrapper">
        <img src={NployeeLogo} alt="" className="main-logo" />
      </div>

      <div className="login-wrapper">
        <h1 className="heading">Sign In</h1>
        <p className="sub-heading">Search for new jobs or maybe employees</p>

        <div className="auth-inputs">
          <input
            onChange={(e) => {
              setCredentials({ ...credentials, email: e.target.value });
            }}
            className="common-input"
            placeholder="Enter your Email"
            type="email"
          />
          <input
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value });
            }}
            className="common-input"
            placeholder="Enter your Password"
            type="password"
          />
        </div>
        <button
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
          onClick={loginHandler}
          className="login-btn"
        >
          Sign In
        </button>
        <hr
          style={{ padding: "10px 150px" }}
          className="hr-text"
          data-content="OR"
        />
        <div className="google-btn-wrapper">
          <GoogleButton
            className="google-btn"
            onClick={googleSignIn}
          />

          <p className="go-to-signup">Dont have an account yet? <span className="join-now">Join Now</span></p>
        </div>
      </div>
    </div>
  );
}
