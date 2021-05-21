import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { searchSliceActions } from "../../store/slices/searchSlice";

import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  console.log(searchResults);
  const showDetailHandler = (movies) => {
    dispatch(searchSliceActions.setChildrenMovies(movies));
  };

  return searchResults && searchResults.length > 0 ? (
    <>
      <h1>Search Result</h1>
      <DisplayMovies
        setChildrenMovies={(movie) => {
          showDetailHandler(movie);
        }}
        childrenMovies={searchResults}
      />
    </>
  ) : null;
};

export default SearchResult;
