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
      className={`movie-category__icon ${
        !props.movie.myList ? "fas fa-plus" : "fas fa-check"
      }`}
    >
      <ShowTag className="show-tag" show={props.show}>
        {!props.movie.myList ? "Add To List" : "Remove from list"}
      </ShowTag>
    </i>
  );
};
export default AddToList;
