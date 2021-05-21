import React, { useState, useEffect } from "react";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";
import { FetchData as useFetchData } from "../../customHooks/fetchData";

const ChildrenMoviesPage = (props) => {
  const [data, fetchData, , , setData] = useFetchData();
  const title = "For Children";
  useEffect(() => {
    const url = (pg) => {
      return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=${pg}`;
    };
    fetchData(url(1), "get");
  }, []);

  useEffect(() => {
    data && data.length > 0 && props.setAllMovie({ [title]: data });
  }, [data]);

  return data ? (
    <ChildrenMovies
      setChildrenMovies={(movie) => {
        setData(movie);
      }}
      title={title}
      childrenMovies={data}
    />
  ) : null;
};

export default ChildrenMoviesPage;
