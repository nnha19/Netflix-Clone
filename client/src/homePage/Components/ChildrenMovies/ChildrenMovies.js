import React, { useState } from "react";

import "./ChildrenMovies.css";

import ArrowIcon from "../../../share/UI/arrowIcon/arrowIcon";

const ChildrenMovies = (props) => {
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [curView, setCurView] = useState(0);

  console.log(showRightArrow);

  const showArrowHandler = () => {
    // setShowRightArrow(true);
  };
  const hideArrowHandler = () => {
    // setShowRightArrow(false);
  };

  const moveHandler = (number) => {
    setCurView(curView + number);
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
    <div className="no-padding">
      <div className="movie-category">
        <h3 className="primary-heading movie-category__heading">
          Children Movies
        </h3>
        <div
          style={{ transform: `translateX(${curView}%)` }}
          onMouseEnter={showArrowHandler}
          onMouseLeave={hideArrowHandler}
          className="slider"
        >
          <div className="movies-container">{moviesOutput}</div>
        </div>
        <ArrowIcon
          style={{ left: "0" }}
          showArrow={showRightArrow}
          arrowType="left"
          clicked={() => moveHandler(100)}
        />
        <ArrowIcon
          clicked={() => moveHandler(-100)}
          showArrow={showRightArrow}
          arrowType="right"
        />
      </div>
    </div>
  ) : null;
};

export default ChildrenMovies;
