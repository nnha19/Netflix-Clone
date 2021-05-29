import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../../../store/slices/userSlice";
import { loginModeSliceActions } from "../../../store/slices/loginModeSlice";

import "./Auth.css";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = (props) => {
  const loginMode = useSelector((state) => state.loginMode.loginMode);
  const dispatch = useDispatch();

  const changeModeHandler = (error) => {
    dispatch(loginModeSliceActions.setLoginMode(false));
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
