import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMovie } from "../../../../../../store/slices/userSlice";
import { useLikedOrDisLiked } from "../../../../../../customHook/useLikedOrDisLiked";

import ShowTag from "../../ShowTag/ShowTag";

const LikeMovie = (props) => {
  const userLikedMovies = useSelector((state) => state.user.likeMovies);

  const [isLiked] = useLikedOrDisLiked({
    likeMovies: userLikedMovies,
    movieId: props.movie.id,
  });

  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const likeMovieHandler = () => {
    dispatch(
      likeMovie({ movieId: props.movie.id, userId, type: "likeMovies" })
    );
  };

  //far fa-thumbs-up
  return (
    <i
      onClick={likeMovieHandler}
      onMouseEnter={() => props.showTagHandler("like", true)}
      onMouseLeave={() => props.showTagHandler("like")}
      className={`movie-category__icon fa${isLiked ? "s" : "r"} fa-thumbs-up ${
        isLiked ? "applied-icon" : ""
      }`}
    >
      <ShowTag className="show-tag" show={props.show}>
        I Like This
      </ShowTag>
    </i>
  );
};

export default LikeMovie;
