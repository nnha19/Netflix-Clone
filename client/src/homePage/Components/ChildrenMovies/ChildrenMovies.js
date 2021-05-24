import React, { useState, createRef, useEffect } from "react";

import "./ChildrenMovies.css";

import ArrowIcon from "../../../share/UI/arrowIcon/arrowIcon";
import DisplaySlider from "./DisplaySlider/DisplaySlider";
import MovieCatTitle from "./MovieCatTitle/MovieCatTitle";
import ShowDetailWhenHover from "./ShowDetailWhenHover/ShowDetailWhenHover";
import ViewDetail from "./ViewDetail/ViewDetail";

let timer;

const ChildrenMovies = (props) => {
  const childrenMovies = props.childrenMovies;
  const moviesPerView = 5;

  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [curView, setCurView] = useState(0);
  const [moviesLeft, setMoviesLeft] = useState(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showSlide, setShowSlide] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);

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

  function showOrHideDetail(id, type) {
    let cloned = [...childrenMovies];
    const hoveredOne = childrenMovies.find((cm) => cm.id === id);
    const index = childrenMovies.findIndex((cm) => cm.id === id);
    const newObj = { ...hoveredOne };
    if (type) {
      const modified = cloned.map((movie) => {
        const clonedMovie = { ...movie };
        clonedMovie.showDetail = false;
        return clonedMovie;
      });
      cloned = modified;
      newObj.showDetail = true;
    } else {
      newObj.showDetail = false;
    }
    cloned[index] = newObj;
    props.setChildrenMovies(cloned);
  }

  const showDetailHandler = (movie) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      showOrHideDetail(movie.id, "show");
    }, 800);
  };

  const hideDetailHandler = (movie) => {
    timer && clearTimeout(timer);
    showOrHideDetail(movie.id);
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

  const viewDetailHandler = (movie) => {
    setViewDetail(movie);
  };

  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const style = {
        transform: !props.detail ? `translateX(${16 * i}rem)` : "",
      };
      return (
        <>
          <div className={props.detail ? "fixed-parent" : ""}>
            <div
              onMouseEnter={() => showDetailHandler(movie)}
              onMouseLeave={() => hideDetailHandler(movie)}
              style={style}
              className={`movie-category__detail ${
                movie.showDetail ? "prolong-width" : ""
              } ${props.detail ? "relative-position" : ""}`}
            >
              <img
                ref={getWidth}
                key={movie.id}
                className={`movie-category__img ${
                  movie.showDetail ? "shorten-img" : ""
                }`}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              {movie.showDetail && (
                <ShowDetailWhenHover
                  viewDetail={viewDetailHandler}
                  movie={movie}
                />
              )}
            </div>
          </div>
        </>
      );
    });

  useEffect(() => {
    if (viewDetail) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "maxContent";
    }
  }, [viewDetail]);

  const hideViewDetailHandler = () => {
    setViewDetail(null);
  };

  return childrenMovies ? (
    <>
      {viewDetail && (
        <ViewDetail hideViewDetail={hideViewDetailHandler} movie={viewDetail} />
      )}
      <div className="overflow-wrapper">
        <div className={`no-padding ${props.detail ? "visible-overflow" : ""}`}>
          <div
            onMouseEnter={showArrowHandler}
            onMouseLeave={hideArrowHandler}
            className={`movie-category ${props.detail ? "min-height" : ""}`}
          >
            <div className="movie-category__header">
              <MovieCatTitle
                title={props.title}
                className="primary-heading movie-category__heading"
                movies={childrenMovies}
              />
              {showSlide && !props.detail && (
                <DisplaySlider
                  activeSlide={activeSlide}
                  moviesPerView={moviesPerView}
                  movies={childrenMovies}
                />
              )}
            </div>

            <div
              style={{
                transform: !props.detail ? `translateX(${curView}px)` : "",
              }}
              className="slider"
            >
              <div className={`movies-container ${props.detail ? "flex" : ""}`}>
                {moviesOutput}
              </div>
            </div>
            {!props.detail && (
              <>
                <ArrowIcon
                  style={{ left: "-2.9rem" }}
                  showArrow={showLeftArrow}
                  arrowType="left"
                  clicked={() => moveHandler("left")}
                />
                <ArrowIcon
                  clicked={() => moveHandler("right")}
                  showArrow={showRightArrow}
                  arrowType="right"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ChildrenMovies;
