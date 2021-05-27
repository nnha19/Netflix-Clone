import React, { useState } from "react";

import "./Auth.css";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = (props) => {
  const [loginMode, setLoginMode] = useState(true);

  return (
    <div className="auth-container">
      {loginMode && <Login changeMode={() => setLoginMode(false)} />}
      {!loginMode && <Signup />}
    </div>
  );
};

export default Auth;
