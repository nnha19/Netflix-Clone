import React, { useState, useEffect } from "react";

import axios from "axios";

import ChildrenMovies from "../Components/ChildrenMovies/ChildrenMovies";
import { FetchData as useFetchData } from "../../customHooks/fetchData";

const ChildrenMoviesPage = (props) => {
  const [data, fetchData] = useFetchData();
  const [data2, fetchData2] = useFetchData();
  const [data3, fetchData3] = useFetchData();

  useEffect(() => {
    const url = (pg) => {
      return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&page=${pg}`;
    };
    fetchData(url(1), "get");
    fetchData2(url(2), "get");
    fetchData3(url(3), "get");
  }, []);

  return data && data2 && data3 ? (
    <ChildrenMovies
      title="For Children"
      childrenMovies={[...data, ...data2, ...data3]}
    />
  ) : null;
};

export default ChildrenMoviesPage;
