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

  console.log(viewDetail);

  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const movies = (
        <SwiperSlide>
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
        </SwiperSlide>
      );
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

  const hideViewDetailHandler = () => {
    setViewDetail(null);
  };

  return childrenMovies ? (
    <>
      {viewDetail && (
        <ViewDetail hideViewDetail={hideViewDetailHandler} movie={viewDetail} />
      )}
      <div className="movie-category">
        <MovieCatTitle className="movie-category__title" title={props.title} />
        <Swiper
          spaceBetween={50}
          pagination
          navigation
          slidesPerView={5}
          slidesPerGroup={5}
        >
          {moviesOutput}
        </Swiper>
      </div>
    </>
  ) : null;
};

export default ChildrenMovies;
