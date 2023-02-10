import "../styles/nav.css";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { Transition } from 'react-transition-group';

export const Nav = () => {
  const userValue = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const username = userValue.loggedInUser;

  const changeMenu = () => {
    setMenuVisible((old) => {
      return !old;
    });
  };
  return (
    <div className="menuBackground">
      <div className="menuContainer">
        <div className="titleContainer">
          <NavLink to="/reviews" className="title">
            Northcoders Game Reviews
          </NavLink>
          <div
            onClick={() => {
              changeMenu();
            }}
            className="burgerContainer"
          >
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
        <div className="nav" id={menuVisible?("openMenu"):("closeMenu")}>
          <NavLink id="reviewNavLink" to="/reviews">
            Reviews
          </NavLink>
          <NavLink to="/users">Users</NavLink>
          {username === "" ? null : (
            <span
              onClick={() => {
                userValue.setLoggedInUser("");
              }}
            >
              {username} Log Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
