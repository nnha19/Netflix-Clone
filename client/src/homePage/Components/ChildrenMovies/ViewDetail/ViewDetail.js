import React from "react";

import IconWithTag from "../ShowDetailWhenHover/IconWithTag/IconWithTag";

import "./ViewDetail.css";

const ViewDetail = (props) => {
  const movie = props.movie;
  console.log(movie);
  return (
    <div className="view-detail">
      <img
        className="view-detail__img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <div className="view-detail__body">
        <IconWithTag detailPage={movie} />
      </div>
    </div>
  );
};

export default ViewDetail;
