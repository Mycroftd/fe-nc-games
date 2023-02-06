import React from "react";

export const ReviewsCard = ({ review }) => {
  console.log(review.review_body);
  const maxStringLength = 200;

  const stringMaxLength =
    review.review_body.length > maxStringLength
      ? review.review_body.substring(0, maxStringLength) + "..."
      : review.review_body;

      console.log(review);
  return (
    <div className="reviews-card">
      <h3>{review.title}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <p>{stringMaxLength}</p>
      <p>Votes: {review.votes}</p>
    </div>
  );
};
