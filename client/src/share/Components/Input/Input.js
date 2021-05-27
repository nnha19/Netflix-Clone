import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [error, setError] = useState(null);

  const checkValidityHandler = (e) => {
    if (e.target.value.length === 0) {
      setError(props.errorMsg);
    } else {
      setError(null);
    }
  };

  return (
    <div className="input-container">
      <input
        onBlur={checkValidityHandler}
        className={`form__input ${props.className}`}
        style={props.style}
        type={props.type}
        value={props.inputVal.value}
        placeholder={props.placeholder}
        id={props.id}
        onChange={(e) => props.changeValue(e, props.id)}
      />
      {error && !props.inputVal.isValid && (
        <p className="form-error">{props.errorMsg}</p>
      )}
    </div>
  );
};

export default Input;
