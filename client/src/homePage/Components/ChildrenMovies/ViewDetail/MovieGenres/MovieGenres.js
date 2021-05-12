import React, { useEffect, useState } from "react";

import MovieCastOrGenres from "../MovieCastOrGenres/MovieCastOrGenres";

import axios from "axios";

const MovieGenres = (props) => {
  const [genres, setGenres] = useState([]);
  const genreIds = props.genres;

  const genreOutput =
    genres.length > 0 &&
    genres.map((genre) => {
      return <span className="cast-names">{genre}</span>;
    });

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=a31d02795054ebca84e5c9d45e915e85&language=en-US"
      )
      .then((res) => {
        const allGenres = res.data.genres;
        const genres = [];
        allGenres.forEach((allG) => {
          genreIds.forEach((chosenG) => {
            allG.id === chosenG && genres.push(allG.name);
          });
          setGenres(genres);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movie-cast">
      <span className="movie-cast__text">Genres:</span>
      <div className="movie-cast__chars">{genreOutput}</div>
    </div>
  );
};

export default MovieGenres;
