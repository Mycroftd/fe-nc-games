import React, { useState, useEffect } from "react";
import { ReviewsForm } from "./ReviewsComponents/ReviewsForm";
import { ReviewsCard } from "./ReviewsComponents/ReviewsCard";
import { getReviews } from "../utils/api";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((currentReviews) => {
      setReviews(currentReviews);
    });
  }, []);

  return (
    <div>
      <h2>Reviews Page</h2>
      <ReviewsForm />
      <div className="review-card-container">
        {reviews.map((review) => {
          return <ReviewsCard review={review} key={review.review_id} />;
        })}
      </div>
    </div>
  );
};
