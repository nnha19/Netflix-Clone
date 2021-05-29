import React from "react";

import "./primaryBtn.css";

const primaryBtn = (props) => {
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={`btn primary-btn ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default primaryBtn;
