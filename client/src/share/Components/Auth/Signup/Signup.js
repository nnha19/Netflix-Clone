import React from "react";

import "./Signup.css";

const Signup = (props) => {
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
        <form>
          <input
            className="sign-up__input"
            type="email"
            placeholder="Email address"
          />
          <button className="sign-up__btn btn">Get Started </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
