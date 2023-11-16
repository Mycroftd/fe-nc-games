import "../styles/nav.css";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const Nav = () => {
  const userValue = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const username = userValue.loggedInUser;

  const openMenu = () => {
    setMenuOpen((previousMenu) => {
      return !previousMenu;
    });
  };
  /*resets menu if opened while resizing*/
  window.addEventListener("resize", () => {
    if (window.innerHeight > 650) {
      setMenuOpen(false);
    }
  });

  return (
    <div className="menuBackground">
      <div className="menuContainer">
        <header className="titleContainer">
          <NavLink to="/reviews" className="title">
            Northcoders Game Reviews
          </NavLink>
          <div
            onClick={() => {
              openMenu();
            }}
            className="burgerContainer"
          >
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </header>
        <nav id={menuOpen ? "openMenu" : "closeMenu"} className="nav">
          <NavLink id="reviewNavLink" to="/reviews">
            Reviews
          </NavLink>
          <NavLink to="/users">Users</NavLink>
          {username === "" ? null : (
            <span
              className="loggedInUser"
              onClick={() => {
                userValue.setLoggedInUser("");
                localStorage.removeItem('username');
              }}
            >
              {username} Log Out
            </span>
          )}
        </nav>
      </div>
    </div>
  );
};
