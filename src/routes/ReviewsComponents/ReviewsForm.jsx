import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export const ReviewsForm = () => {
  const sorbyArr = ["title", "created_at", "votes"];
  const [categories, setCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState("title");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState("Ascending");
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((returnedCategories) => {
      setCategories(returnedCategories);
    });
  }, []);

  const updatePage = (e) => {
    e.preventDefault();
    let order = "";
    if (selectedOrder === "Ascending") {
      order = "ASC";
    } else {
      order = "DESC";
    }
    navigate({
      pathname: "/reviews/" + selectedCategory,
      search: `?sort_by=${selectedSort}&order=${order}`,
    });
  };

  return (
    <div className="reviews-form-container">
      <form onSubmit={updatePage}>
        <label htmlFor="sort-by">
          Sort By:
          <select
            id="sort-by"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            {sorbyArr.map((sortby) => {
              return <option key={sortby}>{sortby}</option>;
            })}
          </select>
        </label>
        <label htmlFor="sort-by">
          Order: 
          <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
          >
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </label>
        <label htmlFor="category">
          Category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option name="All"> All </option>
            {categories.map((category) => {
              return (
                <option key={category.slug} name={category.slug}>
                  {category.slug}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit"> Update </button>
      </form>
    </div>
  );
};
