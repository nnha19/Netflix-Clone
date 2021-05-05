import React from "react";

import ShowTag from "../../ShowTag/ShowTag";

const ViewDetailIcon = (props) => {
  return (
    <i
      onMouseEnter={() => props.showTagHandler("viewDetail", true)}
      onMouseLeave={() => props.showTagHandler("viewDetail")}
      className={props.className}
    >
      <ShowTag className="show-tag" show={props.showTag["viewDetail"]}>
        View Detail
      </ShowTag>
    </i>
  );
};

export default ViewDetailIcon;
