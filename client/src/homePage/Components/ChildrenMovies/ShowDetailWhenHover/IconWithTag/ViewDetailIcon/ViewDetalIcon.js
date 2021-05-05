import React, { useState } from "react";

import "./ViewDetail.css";

import ShowTag from "../../ShowTag/ShowTag";

const ViewDetailIcon = (props) => {
  return (
    <>
      <i
        onClick={() => props.viewDetail(props.movie)}
        onMouseEnter={() => props.showTagHandler("viewDetail", true)}
        onMouseLeave={() => props.showTagHandler("viewDetail")}
        className={props.className}
      >
        <ShowTag className="show-tag" show={props.showTag["viewDetail"]}>
          View Detail
        </ShowTag>
      </i>
    </>
  );
};

export default ViewDetailIcon;
