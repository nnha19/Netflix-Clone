import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../../../store/slices/userSlice";

import "./Password.css";

import { useCheckAllValid } from "../../../../../customHook/useCheckAllValid";
import Input from "../../../Input/Input";
import PrimaryBtn from "../../../../UI/primaryBtn/primaryBtn";
import LoadingSpinner from "../../../../UI/loadingSpinner/loadingSpinner";
import FormError from "../../../Error/FormError/FormError";

const Password = (props) => {
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState({
    password: {
      value: "",
      isValid: false,
    },
  });
  const [allValid] = useCheckAllValid(inputVal);

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

  const createAccountHandler = async (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        email: props.email,
        password: inputVal.password.value,
        type: "signup",
      })
    );
  };

  return (
    <div className="password">
      <div className="password-content">
        {error && <FormError error={error} />}
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
            <strong>{props.email}</strong>
          </span>
        </p>
        <form onSubmit={createAccountHandler}>
          <Input
            className="password-content__input"
            changeValue={(e, id) => changeValHandler(e, id)}
            type="password"
            placeholder="Password"
            id="password"
            errorMsg="Password is required"
            inputVal={inputVal.password}
          />
          <PrimaryBtn disabled={!allValid} className="password-content__btn">
            {loading ? <LoadingSpinner /> : "Continue"}
          </PrimaryBtn>
        </form>
      </div>
    </div>
  );
};
export default Password;
