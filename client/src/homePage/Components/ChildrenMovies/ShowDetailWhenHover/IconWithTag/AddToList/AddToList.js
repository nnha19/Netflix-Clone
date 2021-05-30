import React from "react";

import ShowTag from "../../ShowTag/ShowTag";

const AddToList = (props) => {
  return (
    <i
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
