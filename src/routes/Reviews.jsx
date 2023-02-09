import React, { useState, useEffect } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import { ReviewsForm } from "./ReviewsComponents/ReviewsForm";
import { ReviewsCard } from "./ReviewsComponents/ReviewsCard";
import { getReviews } from "../utils/api";

export const Reviews = () => {
  const { category } = useParams();
  let [searchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const sortBy = searchParams.get("sort_by");
  const sortOrder = searchParams.get("order");

  useEffect(() => {
    let cat;
    if (category === "All" || category === undefined) {
      cat = undefined;
    } else {
      cat = category;
    }
    getReviews(cat,sortBy,sortOrder).then((currentReviews) => {
      setReviews(currentReviews);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  }, [category,searchParams,sortBy,sortOrder]);

  return (
    <div>
      <h2>Reviews Page</h2>
      <ReviewsForm />
      <div className="review-card-container">
        {isLoading ? (
          <p>Page is Loading</p>
        ) : (
          reviews.map((review) => {
            return <ReviewsCard review={review} key={review.review_id} />;
          })
        )}
      </div>
    </div>
  );
};
