import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeMovie } from "../../../../../../store/slices/userSlice";
import { useLikedOrDisLiked } from "../../../../../../customHook/useLikedOrDisLiked";

import ShowTag from "../../ShowTag/ShowTag";

const DisLike = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const userDisLikeMovies = useSelector((state) => state.user.disLikeMovies);
  const [isDisLiked] = useLikedOrDisLiked({
    disLikeMovies: userDisLikeMovies,
    movieId: props.movie.id,
  });

  const disLikeMovieHandler = async () => {
    dispatch(
      likeMovie({ movieId: props.movie.id, userId, type: "disLikeMovies" })
    );
  };

  return (
    <i
      onClick={disLikeMovieHandler}
      onMouseEnter={() => props.showTagHandler("disLike", true)}
      onMouseLeave={() => props.showTagHandler("disLike")}
      className={`movie-category__icon fa${
        isDisLiked ? "s" : "r"
      } fa-thumbs-down ${isDisLiked ? "applied-icon" : ""}`}
    >
      <ShowTag className="show-tag" show={props.show}>
        Not For Me
      </ShowTag>
    </i>
  );
};

export default DisLike;
