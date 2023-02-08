import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";
import { useNavigate } from 'react-router-dom';

export const ReviewsForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((returnedCategories) => {
      setCategories(returnedCategories);
    });
  }, []);

  const updatePage = (e) =>{
    e.preventDefault();
    navigate('/reviews/' + selectedCategory);
  }

  return (
    <div className="reviews-form-container">
      <form onSubmit={updatePage}>
        <label htmlFor="sort-by">
          Sort By:
          <input id="sort-by" type="text" />
        </label>
        <label htmlFor="category">
          Category:
          <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
            <option name="All">All</option>
            {categories.map((category) => {
              return (
                <option key={category.slug} name={category.slug}>
                  {category.slug}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
