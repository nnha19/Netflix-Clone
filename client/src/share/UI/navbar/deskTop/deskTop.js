import React, { useState } from "react";
import "./deskTop.css";

import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Search from "../search/search";
import PrimaryBtn from "../../primaryBtn/primaryBtn";
import ChangeModeBtn from "./changeModeBtn/changeModeBtn";

const DeskTop = (props) => {
  const loginMode = useSelector((state) => state.loginMode.loginMode);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [searchVal, setSearchVal] = useState("");
  const history = useHistory();

  const navigatePageHandler = (url) => {
    history.push(url);
    setSearchVal("");
  };

  return (
    <div className="desktop">
      <div className="desktop__left">
        <div onClick={() => navigatePageHandler("/")} className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
            className="logo__img"
          />
        </div>
        {isAuthenticated && (
          <>
            <li className="nav-bar__item nav-bar__hover">Home</li>
            <li className="nav-bar__item nav-bar__hover">TV Shows</li>
            <li className="nav-bar__item nav-bar__hover">Movies</li>
            <li className="nav-bar__item nav-bar__hover">Latest</li>
            <li className="nav-bar__item nav-bar__hover">My List</li>
          </>
        )}
      </div>
      <div className="desktop__right">
        {isAuthenticated && (
          <>
            <Search searchVal={searchVal} setSearchVal={setSearchVal} />
            <i className="nav-bar__icon fas fa-bell nav-bar__item"></i>
            <i className="nav-bar__item">Profile</i>
          </>
        )}
        {!isAuthenticated && !loginMode && <ChangeModeBtn />}
      </div>
    </div>
  );
};

export default DeskTop;
