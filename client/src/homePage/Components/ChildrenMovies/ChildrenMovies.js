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

  const getWidth = createRef();

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

  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const movies = (
        <div
          onMouseEnter={() => showDetailHandler(movie)}
          onMouseLeave={() => hideDetailHandler(movie)}
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
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
          />
          {movie.showDetail && (
            <ShowDetailWhenHover viewDetail={viewDetailHandler} movie={movie} />
          )}
        </div>
      );

      return props.detail ? (
        <div className="fixed-parent">{movies}</div>
      ) : (
        <SwiperSlide>{movies}</SwiperSlide>
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
      <div className={`movie-category ${props.detail ? "min-height" : ""}  `}>
        <div className="movie-category__header">
          <MovieCatTitle
            component={props.component}
            className="primary-heading movie-category__heading"
            movies={childrenMovies}
            detail={props.detail}
            title={props.title}
          />
        </div>
        {props.detail ? (
          <div className="flex">{moviesOutput}</div>
        ) : (
          <Swiper
            navigation
            pagination={{ clickable: true }}
            slidesPerGroup={4}
            spaceBetween={50}
            slidesPerView={5}
            direction="horizontal"
          >
            {moviesOutput}
          </Swiper>
        )}
      </div>
    </>
  ) : null;
};

export default ChildrenMovies;
