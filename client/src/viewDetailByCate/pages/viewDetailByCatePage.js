import React from "react";

import { useParams } from "react-router-dom";

import ViewDetailByCate from "../Components/ViewDetailByCate/ViewDetailByCate";

const ViewAllMovieCatePage = () => {
  const { movieCategory } = useParams();

  return (
    <>
      <ViewDetailByCate title={movieCategory} />
    </>
  );
};

export default ViewAllMovieCatePage;
