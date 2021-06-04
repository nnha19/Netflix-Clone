import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { moviesSliceActions } from "../../store/slices/moviesSlice";

import ChildrenMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const ViewAllMovieCatePage = () => {
  const dispatch = useDispatch();
  const { movieCategory } = useParams();
  const moviesByCate = useSelector(
    (state) => state.movies.movies[movieCategory]
  );

  const setChildrenMovies = (movies) => {
    dispatch(moviesSliceActions.setMovies({ movies, title: movieCategory }));
  };

  return moviesByCate && moviesByCate.length > 0 ? (
    <ChildrenMovies
      title={movieCategory}
      setChildrenMovies={(movie) => setChildrenMovies(movie)}
      childrenMovies={moviesByCate}
      detail="true"
    />
  ) : null;
};

export default ViewAllMovieCatePage;
