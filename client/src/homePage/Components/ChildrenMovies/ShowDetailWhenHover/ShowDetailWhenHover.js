import React from "react";

import "./ShowDetailWhenHover.css";

const ShowDetailWhenHover = (props) => {
  console.log(props.movie);
  return (
    <div className="movie-category__body">
      <div className="movie-category__icons">
        <i className="movie-category__icon fas fa-play"></i>
        <i className="movie-category__icon fas fa-plus"></i>
        <i className="movie-category__icon far fa-thumbs-up"></i>
        <i className="movie-category__icon fas fa-thumbs-down"></i>
      </div>
      <h4 className="primary-heading center">
        {props.movie.title || props.movie.name}
      </h4>
    </div>
  );
};

export default ShowDetailWhenHover;
