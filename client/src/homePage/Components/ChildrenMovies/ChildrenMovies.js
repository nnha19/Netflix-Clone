import React, { useState, createRef, useEffect } from "react";

import "./ChildrenMovies.css";

import ArrowIcon from "../../../share/UI/arrowIcon/arrowIcon";
import DisplaySlider from "./DisplaySlider/DisplaySlider";
import MovieCatTitle from "./MovieCatTitle/MovieCatTitle";
import ShowDetailWhenHover from "./ShowDetailWhenHover/ShowDetailWhenHover";

const ChildrenMovies = (props) => {
  const childrenMovies = props.childrenMovies;
  const moviesPerView = 5;

  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [curView, setCurView] = useState(0);
  const [moviesLeft, setMoviesLeft] = useState(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showSlide, setShowSlide] = useState(false);

  const getWidth = createRef();

  const showArrowHandler = () => {
    moviesLeft !== 0 && setShowRightArrow(true);
    childrenMovies.length - moviesPerView !== moviesLeft &&
      setShowLeftArrow(true);
    setShowSlide(true);
  };

  const hideArrowHandler = () => {
    setShowRightArrow(false);
    setShowLeftArrow(false);
    setShowSlide(false);
  };

  const showDetailHandler = (id) => {
    let cloned = [...childrenMovies];
    const hoveredOne = childrenMovies.find((cm) => cm.id === id);
    const index = childrenMovies.findIndex((cm) => cm.id === id);
    hoveredOne.showDetail = hoveredOne.showDetail ? false : true;
    cloned[index] = hoveredOne;
    props.setChildrenMovies(cloned);
  };

  const moveHandler = (type) => {
    const width = getWidth.current.offsetWidth;

    if (type === "right") {
      if (moviesLeft >= moviesPerView) {
        setCurView(curView + (-width * moviesPerView - 90));
        setMoviesLeft(moviesLeft - moviesPerView);
        setActiveSlide(activeSlide + 1);
      } else {
        setCurView(curView + -width * moviesLeft);
        setMoviesLeft(moviesLeft - moviesLeft);
        setActiveSlide(activeSlide + 1);
      }
    } else if (type === "left") {
      if (childrenMovies.length - (moviesPerView + 5) >= moviesLeft) {
        setCurView(curView + (width * moviesPerView + 90));
        setMoviesLeft(moviesLeft + moviesPerView);
        setActiveSlide(activeSlide - 1);
      } else {
        const moviesL = childrenMovies.length - moviesPerView - moviesLeft;
        setCurView(curView + width * moviesL);
        setMoviesLeft(moviesLeft + moviesL);
        setActiveSlide(activeSlide - 1);
      }
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

  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const style = { transform: `translateX(${16 * i}rem)` };
      return (
        <div
          onMouseEnter={() => showDetailHandler(movie.id)}
          onMouseLeave={() => showDetailHandler(movie.id)}
          style={style}
          className={`movie-category__detail ${
            movie.showDetail ? "prolong-width" : ""
          }`}
        >
          <img
            ref={getWidth}
            key={movie.id}
            className={`movie-category__img ${
              movie.showDetail ? "shorten-img" : ""
            }`}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          {/* <ShowDetailWhenHover movie={movie} /> */}
          {movie.showDetail && <ShowDetailWhenHover movie={movie} />}
        </div>
      );
    });

  return childrenMovies ? (
    <div className="overflow-wrapper">
      <div className="no-padding">
        <div
          onMouseEnter={showArrowHandler}
          onMouseLeave={hideArrowHandler}
          className="movie-category"
        >
          <div className="movie-category__header">
            <MovieCatTitle
              title={props.title}
              className="primary-heading movie-category__heading"
              movies={childrenMovies}
            />
            {showSlide && (
              <DisplaySlider
                activeSlide={activeSlide}
                moviesPerView={moviesPerView}
                movies={childrenMovies}
              />
            )}
          </div>

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
    </div>
  ) : null;
};

export default ChildrenMovies;
