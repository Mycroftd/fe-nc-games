import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getSingleReview } from "../utils/api";

export const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [ isLoading, setIsLoading ]= useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  const goToComments = (currentReviewId) => {
    navigate("/comments/" + currentReviewId);
  }

  return (
    <div>
      {isLoading ? (
        <p>Page is Loading</p>
      ) : (
        <div className="review_page_container">
          <h2>Review {review.review_id}</h2>
          <h3>{review.title}</h3>
          <img src={review.review_img_url} alt={review.title} />
          <p>Created at: {review.created_at.substring(0, 10)}</p>
          <p>Category: {review.category}</p>
          <p>Designer: {review.designer}</p>
          <p>{review.review_body}</p>
          <p>Votes: {review.votes}</p>
          <p>Comments: {review.comment_count}</p>
          <button onClick={()=>{goToComments(review.review_id)}}>See comments</button>
        </div>
      )}
    </div>
  );
};
