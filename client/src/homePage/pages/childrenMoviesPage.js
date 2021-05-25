import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesSliceActions } from "../../store/slices/moviesSlice";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const ChildrenMoviesPage = (props) => {
  const dispatch = useDispatch();
  const childrenMovies = useSelector(
    (state) => state.movies.movies.ChildrenMovies
  );

  const title = "ChildrenMovies";

  const setChildrenMovies = (movies) => {
    dispatch(moviesSliceActions.setMovies({ movies, title }));
  };

  return childrenMovies && childrenMovies.length > 0 ? (
    <ChildrenMovies
      setChildrenMovies={(movie) => setChildrenMovies(movie)}
      title={title}
      childrenMovies={childrenMovies}
    />
  ) : null;
};

export default ChildrenMoviesPage;
