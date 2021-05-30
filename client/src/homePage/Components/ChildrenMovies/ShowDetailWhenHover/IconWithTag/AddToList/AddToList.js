import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { createUserList } from "../../../../../../store/slices/userInfo";

import ShowTag from "../../ShowTag/ShowTag";

const AddToList = (props) => {
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const addToListHandler = () => {
    dispatch(createUserList({ movieId: props.movie.id, userId }));
  };
  return (
    <i
      onClick={addToListHandler}
      onMouseEnter={() => props.showTagHandler("addToList", true)}
      onMouseLeave={() => props.showTagHandler("addToList")}
      className="movie-category__icon fas fa-plus"
    >
      <ShowTag className="show-tag" show={props.show}>
        Add To List
      </ShowTag>
    </i>
  );
};
export default AddToList;
