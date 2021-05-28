import React, { useState } from "react";

import "./Password.css";

import Input from "../../../Input/Input";
import PrimaryBtn from "../../../../UI/primaryBtn/primaryBtn";
import LoadingSpinner from "../../../../UI/loadingSpinner/loadingSpinner";

const Password = (props) => {
  const [inputVal, setInputVal] = useState({
    password: {
      value: "",
      isValid: false,
    },
  });

  const changeValHandler = (e) => {
    const value = e.target.value;
    const updatedPassword = {
      ...inputVal.password,
      value,
      isValid: value.length > 0,
    };
    const updatedValue = { ...inputVal, password: updatedPassword };
    setInputVal(updatedValue);
  };

  const createAccountHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="password">
      <div className="password-content">
        <h3 className="password-content__header">
          <span>Welcome back!</span>
          <span>Joining Netflix is easy.</span>
        </h3>
        <p className="password-content__text">
          Enter your password and you will be watching in no time.
        </p>
        <p className="email-input">
          <span>Email</span>
          <span>
            <strong>Email@gmail.com</strong>
          </span>
        </p>
        <form onSubmit={createAccountHandler}>
          <Input
            className="password-content__input"
            changeValue={(e, id) => changeValHandler(e, id)}
            type="text"
            placeholder="Email"
            id="email"
            errorMsg="Password is required"
            inputVal={inputVal.password}
          />
          <PrimaryBtn className="password-content__btn">
            <LoadingSpinner />
          </PrimaryBtn>
        </form>
      </div>
    </div>
  );
};
export default Password;
