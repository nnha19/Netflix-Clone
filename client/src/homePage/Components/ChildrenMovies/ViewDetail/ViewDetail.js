import React from "react";

import IconWithTag from "../ShowDetailWhenHover/IconWithTag/IconWithTag";
import MovieCastOrGenres from "./MovieCastOrGenres/MovieCastOrGenres";
import MovieGenres from "./MovieGenres/MovieGenres";
import CloseViewDetailModal from "./CloseViewDetailModal/CloseViewDetailModal";

import "./ViewDetail.css";

const ViewDetail = (props) => {
  const movie = props.movie;
  const airedDate = movie.release_date || movie.first_air_date;
  const releasedDate = airedDate.split("-")[0];
  return (
    <>
      <div onClick={props.hideViewDetail} className="backdrop"></div>
      <div>
        <div className="view-detail">
          <img
            className="view-detail__img"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <div className="view-detail__body">
            <div>
              <IconWithTag movie={movie} detailPage={movie} />
              <div className="view-detail__flex">
                <h3 className="primary-heading view-detail__heading">
                  <span className="primary-heading">
                    {movie.title || movie.name} - {releasedDate}
                  </span>
                </h3>

                <div className="view-detail__right">
                  <MovieCastOrGenres
                    type="Casts"
                    url={`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
                  />
                  <MovieGenres genres={movie.genre_ids} />
                </div>
              </div>
            </div>
            <p className="netflix-text">{movie.overview}</p>
          </div>
          <CloseViewDetailModal hideViewDetail={props.hideViewDetail} />
        </div>
      </div>
    </>
  );
};

export default ViewDetail;
