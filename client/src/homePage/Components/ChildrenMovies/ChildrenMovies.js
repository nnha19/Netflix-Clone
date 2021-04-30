import React from "react";

import "./ChildrenMovies.css";

const ChildrenMovies = (props) => {
  const childrenMovies = props.childrenMovies;
  const moviesOutput =
    childrenMovies &&
    childrenMovies.map((movie, i) => {
      const style = { transform: `translateX(${16 * i}rem)` };
      return (
        <img
          key={movie.id}
          style={style}
          className="movie-category__img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      );
    });
  return childrenMovies ? (
    <div className="movie-category">
      <h3 className="primary-heading movie-category__heading">
        Children Movies
      </h3>
      <div className="movies-container">{moviesOutput}</div>
    </div>
  ) : null;
};

export default ChildrenMovies;
