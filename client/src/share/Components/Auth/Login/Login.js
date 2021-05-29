import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createUser } from "../../../../store/slices/userSlice";

import Input from "../../Input/Input";
import PrimaryBtn from "../../../UI/primaryBtn/primaryBtn";
import { useCheckAllVaid } from "../../../../customHook/useCheckAllValid";

const Login = (props) => {
  const dispatch = useDispatch();
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

  const [allValid] = useCheckAllVaid(inputVals);
  const changeValueHandler = (e, id) => {
    const value = e.target.value;
    const oldInput = {
      ...inputVals[id],
      value: e.target.value,
      isValid: value.length > 0 ? true : false,
    };
    setInputVals({ ...inputVals, [id]: oldInput });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        type: "login",
        email: inputVals.email.value,
        password: inputVals.password.value,
      })
    );
  };

  return (
    <div className="auth">
      <h4 className="auth__heading">Sign in</h4>
      <form onSubmit={loginHandler} className="form auth-form">
        <Input
          inputVal={inputVals.email}
          type="email"
          placeholder="Email"
          id="email"
          changeValue={(e) => changeValueHandler(e, "email")}
          className="auth-form__input"
          errorMsg="Email is required."
        />
        <Input
          inputVal={inputVals.password}
          type="password"
          placeholder="Password"
          id="password"
          changeValue={(e) => changeValueHandler(e, "password")}
          className="auth-form__input"
          errorMsg="Password is required."
        />
        <PrimaryBtn disabled={!allValid} className="auth-form__btn">
          Sign in
        </PrimaryBtn>
        <p onClick={props.changeMode} className="auth-form__text">
          New to Netflix? <span className="sign-up-btn">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
