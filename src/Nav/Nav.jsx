import "../styles/nav.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const Nav = () => {

  const userValue = useContext(UserContext);
  const username = userValue.loggedInUser;


  return (
    <div className="menuBackground">
      <div className="menuContainer">
        <div className="title">Northcoders Game Reviews</div>
        <div className="nav">
          <NavLink to="/">Reviews</NavLink>
          <NavLink to="/users">Users</NavLink>
          {username === ""?null:(
            <span onClick={()=>{userValue.setLoggedInUser("")}}>{username} Log Out</span>
          )}          
        </div>
      </div>
    </div>
  );
};
