import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/slices/getMoviesSlice";
import { getMoviesSliceActions } from "../../store/slices/getMoviesSlice";

import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const TvShowPage = () => {
  const tvShows = useSelector((state) => state.getMovies.singleMovies);
  console.log(tvShows);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovies({
        url: (pageNum) =>
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNum}`,
        pageNum: 7,
      })
    );
  }, []);

  const showDetailHandler = (movies) => {
    dispatch(getMoviesSliceActions.setMovies(movies));
  };

  return tvShows && tvShows.length > 0 ? (
    <DisplayMovies
      setChildrenMovies={(movie) => {
        showDetailHandler(movie);
      }}
      childrenMovies={tvShows}
      detail={true}
      title="Tv Shows"
    />
  ) : null;
};

export default TvShowPage;
