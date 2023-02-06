import React from "react";

export const ReviewsForm = () => {
  return (
    <div className="reviews-form-container">
      <form>
        <label htmlFor="sort-by">
          Sort By:
          <input id="sort-by" type="text" />
        </label>
        <label htmlFor="category">
          Category:
          <select>
            <option>All</option>
          </select>
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
