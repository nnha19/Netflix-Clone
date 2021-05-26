import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-container">
      <input
        onBlur={props.checkValid}
        className={`form__input ${props.className}`}
        style={props.style}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        id={props.id}
        onChange={(e) => props.changeValue(e, props.id)}
      />
      {props.errorMsg && <p className="form-error">{props.errorMsg}</p>}
    </div>
  );
};

export default Input;
