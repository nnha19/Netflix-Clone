import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesSliceActions } from "../../store/slices/moviesSlice";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";

const PopularTvPage = (props) => {
  const dispatch = useDispatch();
  const popularTv = useSelector((state) => state.movies.movies.PopularTv);
  const title = "PopularTv";

  const setPopularTv = (movies) => {
    dispatch(moviesSliceActions.setMovies({ movies, title }));
  };

  return popularTv ? (
    <ChildrenMovies
      setChildrenMovies={(movie) => setPopularTv(movie)}
      title={"Popular Tv"}
      childrenMovies={popularTv}
    />
  ) : null;
};

export default PopularTvPage;
