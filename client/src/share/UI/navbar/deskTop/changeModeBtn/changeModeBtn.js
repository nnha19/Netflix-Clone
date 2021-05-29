import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginModeSliceActions } from "../../../../../store/slices/loginModeSlice";
import { userSliceActions } from "../../../../../store/slices/userSlice";

import PrimaryBtn from "../../../primaryBtn/primaryBtn";

const ChangeModeBtn = (props) => {
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const changeModeHandler = () => {
    dispatch(loginModeSliceActions.setLoginMode(true));
    error && dispatch(userSliceActions.deleteError());
  };
  return (
    <PrimaryBtn clicked={changeModeHandler} className="desktop__btn">
      Sign in
    </PrimaryBtn>
  );
};

export default ChangeModeBtn;
