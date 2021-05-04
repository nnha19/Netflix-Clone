import React, { useState } from "react";

import "./ShowDetailWhenHover.css";

import IconWithTag from "./IconWithTag/IconWithTag";

const ShowDetailWhenHover = (props) => {
  const movieTitle = props.movie.title || props.movie.name;

  const shortenTitleLength = (title) => {
    if (title.length > 20) {
      const shortenTitle = title.substr(0, 20) + "...";
      return shortenTitle;
    } else {
      return title;
    }
  };

  return (
    <div className="movie-category__body">
      <div className="movie-category__icons">
        <IconWithTag />
      </div>
      <h4 className="primary-heading center">
        {shortenTitleLength(movieTitle)}
      </h4>
    </div>
  );
};

export default ShowDetailWhenHover;
