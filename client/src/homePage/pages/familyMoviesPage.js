import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesSliceActions } from "../../store/slices/moviesSlice";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const ChildrenMoviesPage = (props) => {
  const dispatch = useDispatch();
  const familyMovies = useSelector((state) => state.movies.movies.Comedy);

  const title = "Comedy";

  const setChildrenMovies = (movies) => {
    dispatch(moviesSliceActions.setMovies({ movies, title }));
  };

  return familyMovies && familyMovies.length > 0 ? (
    <ChildrenMovies
      setChildrenMovies={(movie) => setChildrenMovies(movie)}
      title={title}
      childrenMovies={familyMovies}
    />
  ) : null;
};

export default ChildrenMoviesPage;
