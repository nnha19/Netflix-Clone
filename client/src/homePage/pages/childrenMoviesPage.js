import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesSliceActions } from "../../store/slices/moviesSlice";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const ChildrenMoviesPage = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies[props.component]);

  const setChildrenMovies = (movies) => {
    dispatch(moviesSliceActions.setMovies({ movies, title: props.component }));
  };

  return movies && movies.length > 0 ? (
    <ChildrenMovies
      setChildrenMovies={(movie) => setChildrenMovies(movie)}
      title={props.title}
      childrenMovies={movies}
      component={props.component}
    />
  ) : null;
};

export default ChildrenMoviesPage;
