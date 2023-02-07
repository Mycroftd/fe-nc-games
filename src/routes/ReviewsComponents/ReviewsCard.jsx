import React from "react";
import { useNavigate } from 'react-router-dom';

export const ReviewsCard = ({ review }) => {
  const maxStringLength = 200;
  const navigate = useNavigate();

  const stringMaxLength =
    review.review_body.length > maxStringLength
      ? review.review_body.substring(0, maxStringLength) + "..."
      : review.review_body;

    const chooseReview = (review_id) =>{
      navigate("/review/" + review_id);
    }
    

  return (
    <div className="reviews-card" onClick={()=>{chooseReview(review.review_id)}}>
      <h3>{review.title}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <p>{stringMaxLength}</p>
      <p>Votes: {review.votes}</p>
    </div>
  );
};
