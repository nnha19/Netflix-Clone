import React, { useState, createRef, useEffect } from "react";

import "./ChildrenMovies.css";

import ArrowIcon from "../../../share/UI/arrowIcon/arrowIcon";

const ChildrenMovies = (props) => {
  const childrenMovies = props.childrenMovies;
  const moviesPerView = 4;

  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [curView, setCurView] = useState(0);
  const [leftMovie, setLeftMovie] = useState(0);

  const getWidth = createRef();

  const showArrowHandler = () => {
    leftMovie !== 0 && setShowRightArrow(true);
    leftMovie !== childrenMovies.length - moviesPerView &&
      setShowLeftArrow(true);
  };

  const hideArrowHandler = () => {
    setShowRightArrow(false);
    setShowLeftArrow(false);
  };

  const moveHandler = (type) => {
    const imgWidth = getWidth.current.offsetWidth;
    if (type === "right") {
      if (leftMovie > moviesPerView) {
        setCurView(curView + -imgWidth * moviesPerView);
        setLeftMovie(leftMovie - moviesPerView);
      } else {
        console.log("Reached");
        setCurView(curView + -imgWidth * leftMovie);
        setLeftMovie(leftMovie - leftMovie);
      }
    } else {
      if (leftMovie !== childrenMovies.length - moviesPerView) {
        setCurView(curView + imgWidth * moviesPerView);
        setLeftMovie(leftMovie + moviesPerView);
      }
    }
  };

  useEffect(() => {
    setLeftMovie(childrenMovies.length - moviesPerView);
  }, [childrenMovies.length]);

  useEffect(() => {
    if (leftMovie === 0) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
    if (leftMovie === childrenMovies.length - moviesPerView) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }
  }, [leftMovie]);

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
