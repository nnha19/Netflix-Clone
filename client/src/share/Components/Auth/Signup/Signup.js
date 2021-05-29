import React, { useState } from "react";

import "./Signup.css";

import { useCheckAllValid } from "../../../../customHook/useCheckAllValid";
import Input from "../../../../share/Components/Input/Input";
import PrimaryBtn from "../../../UI/primaryBtn/primaryBtn";
import Password from "./Password/Password";

const Signup = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(false);
  const [inputVal, setInputVal] = useState({
    email: {
      value: "",
      isValid: false,
    },
  });

  const [allValid] = useCheckAllValid(inputVal);

  const changeValHandler = (e, id) => {
    const value = e.target.value;

    const updatedInputval = {
      ...inputVal[id],
      value,
      isValid: value.length > 0,
    };
    setInputVal({
      ...inputVal,
      [id]: updatedInputval,
    });
  };

  const formSubmitHandler = (e) => {
    setEnteredEmail(true);
  };

  return !enteredEmail ? (
    <div className="sign-up">
      <h4 className="sign-up__heading">
        Unlimited movies, TV shows, and more.
      </h4>
      <h6 className="sign-up__sec-heading">Watch anywhere. Cancel anytime.</h6>
      <div>
        <p className="sign-up__text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={formSubmitHandler} className="form sign-up__form">
          <div className="sign-up__input-container">
            <Input
              changeValue={(e, id) => changeValHandler(e, id)}
              type="text"
              placeholder="Email"
              id="email"
              className="sign-up__input"
              errorMsg="Email is required"
              inputVal={inputVal.email}
            />
            <PrimaryBtn disabled={!allValid} className="sign-up__btn">
              Get Started
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Password email={inputVal.email.value} />
  );
};

export default Signup;
