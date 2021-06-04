import React, { createRef } from "react";

import "./search.css";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import { searchToggleSliceActions } from "../../../../store/slices/searchToggle";

import { getResulsForSearch } from "../../../../store/slices/searchSlice";

let timer;

const Search = (props) => {
  const myRef = createRef();
  const { searchVal, setSearchVal } = props;

  const showSearch = useSelector((state) => state.searchToggle.showSearch);
  const dispatch = useDispatch();

  const history = useHistory();

  const clickedSearchHandler = () => {
    myRef.current.focus();
    dispatch(searchToggleSliceActions.showSearch());
  };

  const valChangeHandler = (e) => {
    setSearchVal(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(async () => {
      dispatch(getResulsForSearch(e.target.value));
      history.push(`/search/q=${e.target.value}`);
    }, 1000);
  };

  const hideSearchAndMoveHomeHandler = () => {
    dispatch(searchToggleSliceActions.hideSearch());
    history.push("/");
    setSearchVal("");
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="nav-bar__search"
        className="search nav-bar__icon"
      >
        <i
          onClick={clickedSearchHandler}
          className={`${
            showSearch ? "move-right" : ""
          } search-icon fas fa-search nav-bar__item`}
        ></i>
        <input
          ref={myRef}
          value={searchVal}
          onChange={valChangeHandler}
          className={`search__input ${showSearch ? "show-search" : ""}`}
          type="text"
          placeholder="Search Movies"
        />
        {showSearch && searchVal.length > 0 && (
          <i
            onClick={hideSearchAndMoveHomeHandler}
            class="nav-bar__link fas fa-times hide-search"
          ></i>
        )}
      </form>
    </>
  );
};

export default Search;
