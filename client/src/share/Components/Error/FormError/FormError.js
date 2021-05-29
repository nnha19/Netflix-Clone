import React from "react";

import "./FormError.css";

const FormError = (props) => {
  return (
    <div className="form-error">
      <p>{props.error}</p>
    </div>
  );
};

export default FormError;
