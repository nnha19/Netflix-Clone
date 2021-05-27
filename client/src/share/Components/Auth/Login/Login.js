import React, { useState, useEffect } from "react";

import Input from "../../Input/Input";
import PrimaryBtn from "../../../UI/primaryBtn/primaryBtn";
import { useCheckAllVaid } from "../../../../customHook/useCheckAllValid";

const Login = (props) => {
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

  return (
    <div className="auth">
      <h4 className="auth__heading">Sign in</h4>
      <form className="form auth-form">
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
        <PrimaryBtn className="auth-form__btn">Sign in</PrimaryBtn>
        <p onClick={props.changeMode} className="auth-form__text">
          New to Netflix? <span className="sign-up-btn">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
