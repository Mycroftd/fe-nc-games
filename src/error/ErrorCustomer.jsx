import React from "react";
import "../styles/error.css";

export const ErrorCustomer = ({errorName}) => {
  return (
      <div className="error">
        <span>{errorName}</span>
      </div>
  );
};
