import React from "react";

import "./MovieCastOrGenres.css";

const MovieCastOrGenres = (props) => {
  const typeOutput =
    props.output.length > 0 &&
    props.output.map((output) => {
      return <span className="cast-names">{output}</span>;
    });

  return props.type ? (
    <div className="movie-cast">
      <span>
        <span className="movie-cast__text">props.type} :</span>
        {typeOutput}
      </span>
    </div>
  ) : null;
};

export default MovieCastOrGenres;
