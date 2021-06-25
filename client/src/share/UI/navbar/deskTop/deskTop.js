import React, { useState } from "react";
import "./deskTop.css";

import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Search from "../search/search";
import ChangeModeBtn from "./changeModeBtn/changeModeBtn";
import Profile from "./profile/profile";

const DeskTop = (props) => {
  const loginMode = useSelector((state) => state.loginMode.loginMode);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const showSearch = useSelector((state) => state.searchToggle.showSearch);
  const userId = useSelector((state) => state.user.userId);
  const [searchVal, setSearchVal] = useState("");
  const [className, setClassName] = useState("desktop-left__items");
  const history = useHistory();

  const navigatePageHandler = (url) => {
    history.push(url);
    setSearchVal("");
  };

  return (
    <div className="desktop">
      <div className={`desktop__left ${showSearch ? "hide-navitem" : ""}`}>
        <div onClick={() => navigatePageHandler("/")} className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
            className="logo__img"
          />
        </div>
        <ul className="items">
          {isAuthenticated && <li className="mobile">Browse</li>}
          {isAuthenticated && (
            <div className={className}>
              <NavLink
                exact
                to="/"
                className="nav-bar__link "
                activeClassName="nav-bar__active"
              >
                <li className="nav-bar__item nav-bar__hover">Home</li>
              </NavLink>
              <NavLink
                exact
                to="/browse/tv-shows"
                className="nav-bar__link "
                activeClassName="nav-bar__active"
              >
                <li className="nav-bar__item nav-bar__hover">TV Shows</li>
              </NavLink>
              <NavLink
                exact
                to="/browse/movies"
                className="nav-bar__link "
                activeClassName="nav-bar__active"
              >
                <li className="nav-bar__item nav-bar__hover">Movies</li>
              </NavLink>
              <NavLink
                exact
                to="/browse/latest"
                className={`nav-bar__link `}
                activeClassName="nav-bar__active"
              >
                <li className="nav-bar__item nav-bar__hover">Latest</li>
              </NavLink>

              <NavLink
                exact
                className={`nav-bar__link ${showSearch ? "hide-navitem" : ""}`}
                activeClassName="nav-bar__active"
                to={`/${userId}/my-list`}
              >
                <li className="nav-bar__item nav-bar__hover">My List</li>
              </NavLink>
            </div>
          )}
        </ul>
      </div>

      <div className="desktop__right">
        {isAuthenticated && (
          <>
            <Search searchVal={searchVal} setSearchVal={setSearchVal} />
            <i
              className={`nav-bar__link nav-bar__icon fas fa-bell nav-bar__item ${
                showSearch ? "hide-navitem" : ""
              }`}
            ></i>
            <Profile showSearch={showSearch} />
          </>
        )}
        {!isAuthenticated && !loginMode && <ChangeModeBtn />}
      </div>
    </div>
  );
};

export default DeskTop;
