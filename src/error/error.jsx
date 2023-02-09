import React from 'react';
import '../styles/error.css';

export const error = ({error}) => {
  return (
    <div className="errContainer">
        <span>Error: {error}</span>
    </div>
  )
}
