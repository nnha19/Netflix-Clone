import React from "react";

import "./moreInfoBtn.css";

const MoreInfo = (props) => {
  return (
    <button onClick={props.clicked} className="more-info-btn netflix-btn">
      <i className="fas fa-info-circle"></i>
      {props.children}
    </button>
  );
};
export default MoreInfo;
