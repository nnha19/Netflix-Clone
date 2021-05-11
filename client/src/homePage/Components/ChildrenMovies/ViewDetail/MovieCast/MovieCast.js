import React from "react";

import "./MovieCast.css";

const MovieCast = (props) => {
  return (
    <div className="movie-cast">
      <span>
        <span className="movie-cast__text">Casts :</span>
        <span className="cast-names">Tom Cruise,Leonardo,Emma Waston</span>
      </span>
    </div>
  );
};

export default MovieCast;
