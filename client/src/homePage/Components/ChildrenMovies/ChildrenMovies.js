import React, { useState } from "react";

import "./ChildrenMovies.css";

import ArrowIcon from "../../../share/UI/arrowIcon/arrowIcon";

const ChildrenMovies = (props) => {
  const [showRightArrow, setShowRightArrow] = useState(false);

  const showArrowHandler = () => {
    setShowRightArrow(true);
  };
  const hideArrowHandler = () => {
    setShowRightArrow(false);
  };

  const childrenMovies = props.childrenMovies;
  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const style = { transform: `translateX(${16 * i}rem)` };
      return (
        <img
          key={movie.id}
          style={style}
          className="movie-category__img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      );
    });

  return childrenMovies ? (
    <div
      onMouseEnter={showArrowHandler}
      onMouseLeave={hideArrowHandler}
      className="movie-category"
    >
      <h3 className="primary-heading movie-category__heading">
        Children Movies
      </h3>
      <div className="movies-container">{moviesOutput}</div>
      <ArrowIcon showArrow={showRightArrow} arrowType="right" />
    </div>
  ) : null;
};

export default ChildrenMovies;
