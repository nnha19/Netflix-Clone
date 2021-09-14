import React, { useEffect } from "react";

import { FetchData as useFetchData } from "../../../../../customHooks/fetchData";

import "./MovieCastOrGenres.css";

const MovieCastOrGenres = (props) => {
  const [result, fetch] = useFetchData([]);

  useEffect(() => {
    if (props.type === "Genres") return;
    fetch(props.url, "get");
  }, []);

  useEffect(() => {
    result && result.splice(5);
  }, [result]);

  const typeOutput =
    result &&
    result.length > 0 &&
    result.map((output, i) => {
      return (
        <span key={i} className="cast-names">
          {output.name},
        </span>
      );
    });

  return (
    <div className="movie-cast">
      <span className="movie-cast__text">{props.type}:</span>
      <div className="movie-cast__chars">{typeOutput}</div>
    </div>
  );
};

export default MovieCastOrGenres;
