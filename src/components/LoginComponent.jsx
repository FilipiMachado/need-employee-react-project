import { useState } from "react";

import { LoginAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const loginHandler = () => {
    let res = LoginAPI(credentials.email, credentials.password)
    console.log(res)
  };

  return (
    <div className="login-wrapper">
      <h1>Login Component</h1>
      <div className="auth-inputs">
        <input
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
          className="common-input"
          placeholder="Enter your Email"
          type="text"
        />
        <input
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
          className="common-input"
          placeholder="Enter your Password"
          type="text"
        />
      </div>
      <button
        onChange={(e) => {
          setCredentials({ ...credentials, email: e.target.value });
        }}
        onClick={loginHandler}
        className="login-btn"
      >
        Log in to NEmployee
      </button>
    </div>
  );
}
