import React, { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import "../styles/Users.css";
import { UserContext } from "../context/UserProvider";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const userValue = useContext(UserContext);

  const logInUser = (username) => {
    userValue.setLoggedInUser(username);
    scrollTop();
  };

  useEffect(() => {
    getUsers().then((receivedUsers) => {
      setUsers(receivedUsers);

    });
  }, []);

  //scrolls to the top of the screen smoothly
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="allUsersContainer">
      <h2>Users</h2>
      <h3>Logged in as: {userValue.loggedInUser}</h3>
      <div>
        {users.map((user) => {
          return (
            <div className="userContainer" key={user.username}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <img src={user.avatar_url} alt={user.username} />
              <button
                onClick={() => {
                  logInUser(user.username);
                }}
              >
                Login as {user.username}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
