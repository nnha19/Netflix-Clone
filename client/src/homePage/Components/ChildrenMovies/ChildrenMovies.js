import React, { useState, createRef, useEffect } from "react";

import "./ChildrenMovies.css";

import MovieCatTitle from "./MovieCatTitle/MovieCatTitle";
import ShowDetailWhenHover from "./ShowDetailWhenHover/ShowDetailWhenHover";
import ViewDetail from "./ViewDetail/ViewDetail";

import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

let timer;

const ChildrenMovies = (props) => {
  const childrenMovies = props.childrenMovies;

  const [viewDetail, setViewDetail] = useState(false);
  const [moviesPerView, setMoviesPerView] = useState(5);
  const [edgeStart, setEdgeStart] = useState([]);

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

  const viewDetailHandler = (movie) => {
    setViewDetail(movie);
  };

  useEffect(() => {
    let arr = [];
    let i = 1;
    while (i < childrenMovies.length) {
      arr.push(i);
      i = i + moviesPerView;
    }
    console.log(moviesPerView);
    console.log(arr);
    setEdgeStart(arr);
  }, [childrenMovies.length]);

  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const result = (
        <div
          onMouseEnter={() => showDetailHandler(movie)}
          onMouseLeave={() => hideDetailHandler(movie)}
          className={`movie-category__detail ${
            movie.showDetail ? "movie-hovered" : ""
          }`}
        >
          <img
            className="movie-category__img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          {movie.showDetail && (
            <ShowDetailWhenHover
              movie={movie}
              viewDetail={(movie) => viewDetailHandler(movie)}
            />
          )}
        </div>
      );
      let movies;
      if (!props.detail) {
        let className;
        edgeStart.forEach((es) =>
          es === i + 1 ? (className = "edge-start") : ""
        );
        movies = (
          <SwiperSlide
            className={`${(i + 1) % moviesPerView === 0 ? "edge" : ""} ${
              i + 1 === childrenMovies.length ? "edge" : ""
            } ${className}`}
          >
            {result}
          </SwiperSlide>
        );
      } else {
        movies = <div className="fixed-parent">{result}</div>;
      }

      return movies;
    });

  useEffect(() => {
    if (viewDetail) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "maxContent";
    }
  }, [viewDetail]);

  useEffect(() => {
    if (window.innerWidth <= 800 && window.width >= 600) {
      setMoviesPerView(4);
    } else if (window.innerWidth < 600) {
      setMoviesPerView(3);
    } else {
      setMoviesPerView(5);
    }
  }, [window.innerWidth]);

  const hideViewDetailHandler = () => {
    setViewDetail(null);
  };

  return childrenMovies ? (
    <>
      {viewDetail && (
        <ViewDetail hideViewDetail={hideViewDetailHandler} movie={viewDetail} />
      )}
      <div className="movie-category">
        <MovieCatTitle
          detail={props.detail}
          component={props.component}
          className="movie-category__title"
          title={props.title}
        />
        {!props.detail ? (
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={moviesPerView}
            slidesPerGroup={moviesPerView}
          >
            {moviesOutput}
          </Swiper>
        ) : (
          <div className="flex">{moviesOutput}</div>
        )}
      </div>
    </>
  ) : null;
};

export default ChildrenMovies;
