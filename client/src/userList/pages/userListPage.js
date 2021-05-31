import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const UserListPage = () => {
  const [userListMovies, setUserListMovies] = useState([]);
  const userList = useSelector((state) => state.userInfo.userList);
  const allMovies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    const listMovies = [];
    for (let key in allMovies) {
      allMovies[key].forEach((movie, i) => {
        userList.forEach((list) => {
          list.movieId === movie.id.toString() && listMovies.push(movie);
        });
      });
    }
    setUserListMovies(listMovies);
  }, [userList]);

  const showDetailHandler = (movie) => {
    setUserListMovies(movie);
  };

  return (
    <>
      <DisplayMovies
        setChildrenMovies={(movie) => {
          showDetailHandler(movie);
        }}
        childrenMovies={userListMovies}
        detail={true}
        title="My List"
      />
    </>
  );
};

export default UserListPage;
