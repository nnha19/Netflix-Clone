import React from "react";

const ShowTag = (props) => {
  return props.show ? (
    <span className={props.className}>{props.children}</span>
  ) : null;
};

export default ShowTag;
