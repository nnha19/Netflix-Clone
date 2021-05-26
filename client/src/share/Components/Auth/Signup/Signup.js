import React, { useState } from "react";

import "./Signup.css";

import Input from "../../../../share/Components/Input/Input";

const Signup = (props) => {
  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    errorMsg: "",
  });

  const changeValHandler = (e, id) => {
    const value = e.target.value;
    setEmail({ value, isValid: value.length > 1 });
  };

  const checkValidHandler = (e) => {
    if (email.isValid) {
      return;
    } else {
      setEmail({ ...email, errorMsg: "Email is required." });
    }
  };

  console.log(email);

  return (
    <div className="sign-up">
      <h4 className="sign-up__heading">
        Unlimited movies, TV shows, and more.
      </h4>
      <h6 className="sign-up__sec-heading">Watch anywhere. Cancel anytime.</h6>
      <div>
        <p className="sign-up__text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="form sign-up__form">
          <div className="sign-up__input-container">
            <Input
              changeValue={(e, id) => changeValHandler(e, id)}
              type="text"
              placeholder="Email"
              id="email"
              className="sign-up__input"
              error="Email is required"
              checkValid={(e) => checkValidHandler(e)}
              errorMsg={email.errorMsg}
            />
            <button className="sign-up__btn btn">Get Started </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
