import "../styles/nav.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="menuBackground">
      <div className="menuContainer">
        <div className="title">Northcoders Game Reviews</div>
        <div className="nav">
          <NavLink to="/">Reviews</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>
    </div>
  );
};
