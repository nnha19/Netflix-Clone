import React from "react";

import "./primaryBtn.css";

const primaryBtn = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={`sign-up__btn btn ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default primaryBtn;
