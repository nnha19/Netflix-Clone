import React, { useState, createRef, useEffect } from "react";

import "./ChildrenMovies.css";

import ArrowIcon from "../../../share/UI/arrowIcon/arrowIcon";

const ChildrenMovies = (props) => {
  const childrenMovies = props.childrenMovies;
  const moviesPerView = 4;

  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [curView, setCurView] = useState(0);
  const [moviesLeft, setMoviesLeft] = useState(null);

  const getWidth = createRef();

  const showArrowHandler = () => {
    moviesLeft !== 0 && setShowRightArrow(true);
    childrenMovies.length - moviesPerView !== moviesLeft &&
      setShowLeftArrow(true);
  };

  const hideArrowHandler = () => {
    setShowRightArrow(false);
    setShowLeftArrow(false);
  };

  const moveHandler = (type) => {
    const width = getWidth.current.offsetWidth;
    if (type === "right") {
      setCurView(curView + -width * moviesPerView);
      setMoviesLeft(moviesLeft - moviesPerView);
    } else if (type === "left") {
      setCurView(curView + width * moviesPerView);
      setMoviesLeft(moviesLeft + moviesPerView);
    }
  };

  useEffect(() => {
    moviesLeft === 0 ? setShowRightArrow(false) : setShowRightArrow(true);
    childrenMovies.length - moviesPerView === moviesLeft
      ? setShowLeftArrow(false)
      : setShowLeftArrow(true);
  }, [moviesLeft]);

  useEffect(() => {
    setMoviesLeft(childrenMovies.length - moviesPerView);
  }, [childrenMovies.length]);

  console.log(moviesLeft);

  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const style = { transform: `translateX(${16 * i}rem)` };
      return (
        <img
          ref={getWidth}
          key={movie.id}
          style={style}
          className="movie-category__img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      );
    });

  return childrenMovies ? (
    <div className="no-padding">
      <div
        onMouseEnter={showArrowHandler}
        onMouseLeave={hideArrowHandler}
        className="movie-category"
      >
        <h3 className="primary-heading movie-category__heading">
          Children Movies
        </h3>

        <div
          style={{ transform: `translateX(${curView}px)` }}
          className="slider"
        >
          <div className="movies-container">{moviesOutput}</div>
        </div>
        <ArrowIcon
          style={{ left: "0" }}
          showArrow={showLeftArrow}
          arrowType="left"
          clicked={() => moveHandler("left")}
        />
        <ArrowIcon
          clicked={() => moveHandler("right")}
          showArrow={showRightArrow}
          arrowType="right"
        />
      </div>
    </div>
  ) : null;
};

export default ChildrenMovies;
