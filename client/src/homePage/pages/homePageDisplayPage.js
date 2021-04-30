import React, { useState, useEffect } from "react";

import axios from "axios";

import HomePageDisplay from "../Components/HomePageDisplay/HomePageDisplay";

const HomePageDisplayPage = (props) => {
  const [displayMovie, setDisplayMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=a31d02795054ebca84e5c9d45e915e85"
      );
      const data = result.data.results;
      const rn = Math.floor(Math.random() * data.length);
      const movie = data[rn];
      setDisplayMovie(movie);
    })();
  }, []);

  //791373
  console.log(displayMovie);
  return (
    <>
      <HomePageDisplay displayMovie={displayMovie} />
    </>
  );
};
export default HomePageDisplayPage;
