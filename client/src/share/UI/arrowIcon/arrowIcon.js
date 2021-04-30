import React from "react";

import "./arrowIcon.css";
{
  /* <i class="far fa-angle-right"></i> */
}
const ArrowIcon = (props) => {
  return props.showArrow ? (
    <div className="icon-container">
      <i className={`arrow-icon fas fa-angle-${props.arrowType}`}></i>
    </div>
  ) : null;
};

export default ArrowIcon;
