import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { searchSliceActions } from "../../store/slices/searchSlice";

import Error from "../../share/Components/Error/Error";
import DisplayMovies from "../../homePage/Components/ChildrenMovies/ChildrenMovies";

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);

  const showDetailHandler = (movies) => {
    dispatch(searchSliceActions.setChildrenMovies(movies));
  };

  return searchResults && searchResults.length > 0 ? (
    <>
      <DisplayMovies
        setChildrenMovies={(movie) => {
          showDetailHandler(movie);
        }}
        childrenMovies={searchResults}
        detail={true}
        title="Search Results"
      />
    </>
  ) : (
    <Error errorMsg={`No results found.`} />
  );
};

export default SearchResult;
