import { useState, useEffect } from "react";

export const useLikedOrDisLiked = (obj) => {
  const likeOrDisLike = obj.likeMovies || obj.disLikeMovies;
  const { movieId } = obj;
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const movieIsLiked = likeOrDisLike.some((likedList) => {
      return likedList === movieId.toString();
    });

    movieIsLiked ? setIsLiked(true) : setIsLiked(false);
  }, [likeOrDisLike]);
  return [isLiked];
};
