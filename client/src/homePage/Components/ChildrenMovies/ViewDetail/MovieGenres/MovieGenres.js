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

  const allGenres = [];
  const fetchData = async (movieType) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/genre/${movieType}/list?api_key=a31d02795054ebca84e5c9d45e915e85&language=en-US`
    );
    const movieGenres = [];
    allGenres.push(result.data.genres);
    allGenres.flat().forEach((genre) => {
      genreIds.forEach((genreId) => {
        genre.id === genreId && movieGenres.push(genre.name);
      });
    });
    setGenres(movieGenres);
  };

  useEffect(() => {
    fetchData("movie");
    fetchData("tv");
  }, []);

  return (
    <div className="movie-cast">
      <span className="movie-cast__text">Genres:</span>
      <div className="movie-cast__chars">{genreOutput}</div>
    </div>
  );
};

export default MovieGenres;
