import React from "react";

import IconWithTag from "../ShowDetailWhenHover/IconWithTag/IconWithTag";
import MovieCast from "./MovieCast/MovieCast";

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
              <IconWithTag detailPage={movie} />
              <div className="view-detail__flex">
                <h3 className="primary-heading view-detail__heading">
                  <span className="primary-heading">
                    {movie.title || movie.name} - {releasedDate}
                  </span>
                </h3>
                <MovieCast />
              </div>
            </div>
            <p className="netflix-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetail;
