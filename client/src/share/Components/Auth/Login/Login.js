import React from "react";

const Login = (props) => {
  const inputVals = props.inputVals;
  return (
    <div className="auth">
      <h4 className="auth__heading">Sign in</h4>
      <form className="form auth-form">
        <input
          className="auth-form__input"
          onChange={(e) => props.changeValueHandler(e, "email")}
          type="email"
          value={inputVals.email.value}
          id="email"
          placeholder="Email"
        />
        <input
          className="auth-form__input"
          onChange={(e) => props.changeValueHandler(e, "password")}
          type="password"
          value={inputVals.password.value}
          id="password"
          placeholder="Password"
        />
        <button className="btn auth-form__btn">Sign in</button>
        <p onClick={props.changeMode} className="auth-form__text">
          New to Netflix? <span className="sign-up-btn">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
