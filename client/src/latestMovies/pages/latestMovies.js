import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/slices/getMoviesSlice";
import { getMoviesSliceActions } from "../../store/slices/getMoviesSlice";

import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const LatestMoviesPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMovies({
        url: (pageNum) =>
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNum}`,
        pageNum: 7,
        title: "latestMovies",
      })
    );
  }, []);

  const showDetailHandler = (movies) => {
    dispatch(
      getMoviesSliceActions.setMovies({ movies, title: "latestMovies" })
    );
  };

  const latestMovies = useSelector(
    (state) => state.getMovies.singleMovies.latestMovies
  );

  return latestMovies && latestMovies.length > 0 ? (
    <DisplayMovies
      setChildrenMovies={(movie) => {
        showDetailHandler(movie);
      }}
      detail="true"
      childrenMovies={latestMovies}
      title="Latest Movies"
    />
  ) : null;
};

export default LatestMoviesPage;
