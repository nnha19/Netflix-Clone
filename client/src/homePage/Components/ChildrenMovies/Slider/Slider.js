import React from "react";

import ArrowIcon from "../../../../share/UI/arrowIcon/arrowIcon";

import "./Slider.css";

const Slider = (props) => {
  return (
    <>
      <ArrowIcon style={{ left: "0" }} showArrow="true" arrowType="left" />
      <ArrowIcon showArrow="true" arrowType="right" />
    </>
  );
};

export default Slider;
