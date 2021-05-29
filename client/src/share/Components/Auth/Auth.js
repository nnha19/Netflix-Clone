import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userSliceActions } from "../../../store/slices/userSlice";

import "./Auth.css";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = (props) => {
  const dispatch = useDispatch();
  const [loginMode, setLoginMode] = useState(true);

  const changeModeHandler = (error) => {
    setLoginMode(false);
    error && dispatch(userSliceActions.deleteError());
  };

  return (
    <div className="auth-container">
      {loginMode && <Login changeMode={(error) => changeModeHandler(error)} />}
      {!loginMode && <Signup />}
    </div>
  );
};

export default Auth;
