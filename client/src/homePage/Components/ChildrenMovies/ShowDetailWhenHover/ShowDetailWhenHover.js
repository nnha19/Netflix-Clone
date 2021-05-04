import React from "react";

import "./ShowDetailWhenHover.css";

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
        <i className="movie-category__icon fas fa-play"></i>
        <i className="movie-category__icon fas fa-plus"></i>
        <i className="movie-category__icon far fa-thumbs-up"></i>
        <i className="movie-category__icon fas fa-thumbs-down"></i>
      </div>
      <h4 className="primary-heading center">
        {shortenTitleLength(movieTitle)}
      </h4>
    </div>
  );
};

export default ShowDetailWhenHover;
