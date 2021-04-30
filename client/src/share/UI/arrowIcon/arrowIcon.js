import React from "react";

import "./arrowIcon.css";
{
}
const ArrowIcon = (props) => {
  return props.showArrow ? (
    <div onClick={props.clicked} style={props.style} className="icon-container">
      <i className={`arrow-icon fas fa-angle-${props.arrowType}`}></i>
    </div>
  ) : null;
};

export default ArrowIcon;
