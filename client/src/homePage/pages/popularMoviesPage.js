import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesSliceActions } from "../../store/slices/moviesSlice";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const PopularMoviesPage = (props) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.movies.movies.PopularMovies
  );
  const title = "PopularMovies";

  const setPopularMovies = (movies) => {
    dispatch(moviesSliceActions.setMovies({ movies, title }));
  };

  return popularMovies ? (
    <ChildrenMovies
      setChildrenMovies={(movie) => setPopularMovies(movie)}
      title={title}
      childrenMovies={popularMovies}
    />
  ) : null;
};

export default PopularMoviesPage;
