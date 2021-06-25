import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";
import Error from "../../share/Components/Error/Error";

import axios from "axios";

const UserListPage = () => {
  const [userListMovies, setUserListMovies] = useState([]);
  const userList = useSelector((state) => state.userInfo.userList);

  useEffect(() => {
    const func = async (list) => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${list.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      return resp.data;
    };

    const makeRequest = () => {
      return Promise.all(userList.map((list) => func(list)));
    };

    makeRequest()
      .then((resp) => setUserListMovies(resp))
      .catch((err) => console.log(err));
  }, [userList]);

  const showDetailHandler = (movie) => {
    setUserListMovies(movie);
  };

  return userListMovies && userListMovies.length > 0 ? (
    <DisplayMovies
      setChildrenMovies={(movie) => {
        showDetailHandler(movie);
      }}
      childrenMovies={userListMovies}
      detail={true}
      title="My List"
    />
  ) : (
    <Error errorMsg="Your list will be displayed here." />
  );
};

export default UserListPage;
