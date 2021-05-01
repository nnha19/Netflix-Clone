import React from "react";

import "./DisplaySlider.css";

const DisplaySlider = (props) => {
  const moviesLength = props.movies.length;
  const moviesPerView = props.moviesPerView;

  const sliderLength = Math.ceil(moviesLength / moviesPerView);

  const sliderLengthOutput = Array.from(new Array(sliderLength)).map(
    (block, i) => {
      return (
        <span
          className={`display-slider__block ${
            props.activeSlide === i + 1 ? "active-slide" : ""
          }`}
        ></span>
      );
    }
  );

  return <div className="display-slider">{sliderLengthOutput}</div>;
};

export default DisplaySlider;
