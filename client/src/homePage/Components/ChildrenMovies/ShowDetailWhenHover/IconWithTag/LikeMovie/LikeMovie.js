import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMovie } from "../../../../../../store/slices/userSlice";
import ShowTag from "../../ShowTag/ShowTag";

const LikeMovie = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const userLikedMovies = useSelector((state) => state.user.likeMovies);
  console.log(userLikedMovies);
  useEffect(() => {
    const isLiked = userLikedMovies.some((likedList) => {
      return likedList === props.movie.id.toString();
    });

    isLiked ? setIsLiked(true) : setIsLiked(false);
  }, [userLikedMovies]);

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
