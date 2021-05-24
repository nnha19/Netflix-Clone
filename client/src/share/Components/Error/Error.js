import React from "react";

import "./Error.css";

const Error = (props) => {
  return (
    <div className="error">
      <p className="error__msg">{props.errorMsg}</p>
    </div>
  );
};

export default Error;
