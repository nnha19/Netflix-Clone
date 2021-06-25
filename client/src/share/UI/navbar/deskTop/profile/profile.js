import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../../../../../store/slices/userSlice";
import { dropDownSliceActions } from "../../../../../store/slices/dropDownSlice";
import "./profile.css";

const Profile = (props) => {
  const showDropDown = useSelector((state) => state.dropDown.showDropDown);
  const dispatch = useDispatch();

  const showDropDownHandler = (e) => {
    dispatch(dropDownSliceActions.toggleDropDown(true));
  };

  const signoutHandler = () => {
    dispatch(userSliceActions.signout());
  };

  return (
    <>
      <i
        onClick={showDropDownHandler}
        id="user-profile"
        className={`fas fa-user-alt nav-bar__link nav-bar__item ${
          props.showSearch ? "hide-navitem" : ""
        }`}
      >
        {showDropDown && (
          <ul className="auth__dropdown">
            <li className="dropdown__list">Switch Profile</li>
            <li className="dropdown__list">Select Plan</li>
            <li className="dropdown__list">Purchases</li>
            <li className="dropdown__list">Account Settings</li>
            <hr></hr>
            <li onClick={signoutHandler} className="dropdown__list">
              Sign out
            </li>
          </ul>
        )}
      </i>
    </>
  );
};

export default Profile;
