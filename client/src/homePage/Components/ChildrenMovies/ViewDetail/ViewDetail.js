import React from "react";

import IconWithTag from "../ShowDetailWhenHover/IconWithTag/IconWithTag";

import "./ViewDetail.css";

const ViewDetail = (props) => {
  const movie = props.movie;
  const releasedDate = movie.release_date.split("-")[0];

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
            <IconWithTag detailPage={movie} />
            <h3 className="primary-heading view-detail__heading">
              <span className="primary-heading">
                {movie.title} - {releasedDate}
              </span>
            </h3>
            <p className="netflix-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetail;
