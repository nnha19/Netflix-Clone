import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/slices/getMoviesSlice";
import { getMoviesSliceActions } from "../../store/slices/getMoviesSlice";

import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const MoviesPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovies({
        url: (pageNum) =>
          `https://api.themoviedb.org/3/movie/popular?api_key=a31d02795054ebca84e5c9d45e915e85&language=en-US&page=${pageNum}`,
        pageNum: 10,
        title: "movies",
      })
    );
  }, []);
  const movies = useSelector((state) => state.getMovies.singleMovies.movies);

  const showDetailHandler = (movies) => {
    dispatch(getMoviesSliceActions.setMovies({ title: "movies", movies }));
  };

  return movies && movies.length > 0 ? (
    <DisplayMovies
      setChildrenMovies={(movie) => {
        showDetailHandler(movie);
      }}
      childrenMovies={movies}
      detail={true}
      title="Movies"
    />
  ) : null;
};

export default MoviesPage;
