import React, { useState } from "react";

import "./Auth.css";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = (props) => {
  const [inputVals, setInputVals] = useState({
    email: {
      isValid: false,
      value: null,
    },
    password: {
      isValid: false,
      value: null,
    },
  });
  const [loginMode, setLoginMode] = useState(true);

  const changeValueHandler = (e, id) => {
    const value = e.target.value;
    const oldInput = {
      ...inputVals[id],
      value: e.target.value,
      isValid: value.length > 0 ? true : false,
    };
    setInputVals({ ...inputVals, [id]: oldInput });
  };

  return (
    <div className="auth-container">
      {loginMode && (
        <Login
          changeMode={() => setLoginMode(false)}
          changeValueHandler={(e, id) => changeValueHandler(e, id)}
          inputVals={inputVals}
        />
      )}
      {!loginMode && <Signup />}
    </div>
  );
};

export default Auth;
