import React, { useState, useEffect } from "react";
import '../styles/review.css';
import { useParams } from "react-router-dom";
import { getSingleReview, patchReviewVote } from "../utils/api";
import { Comments } from "./Comments";
import { ErrorCustomer } from "../error/ErrorCustomer";

export const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrorMessage] = useState("");
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    }).catch((err) => {
      setPageError("Review Not Found");
    });
  }, [review_id]);

  const incVote = () => {
    setErrorMessage("");
    const reviewCopy = { ...review };
    reviewCopy.votes++;
    setReview(reviewCopy);
    patchReviewVote(review_id).catch((err) => {
      reviewCopy.votes--;
      setReview(reviewCopy);
      setErrorMessage(err.message);
    });
  };

  if(pageError !== ""){
    return (
      <ErrorCustomer errorName={pageError}/>
    )
  }

  return (
    <main className="page_outer">
      {isLoading ? (
        <p>Page is Loading</p>
      ) : (
        <div>
          <section className="review_page_container">
            <h2>Review {review.review_id}</h2>
            <h3>{review.title}</h3>
            <img src={review.review_img_url} alt={review.title} />
            <p>Created at: {review.created_at.substring(0, 10)}</p>
            <p>Category: {review.category}</p>
            <p>Designer: {review.designer}</p>
            <p>{review.review_body}</p>
            <p>
              Votes: {review.votes}{" "}
              <button
                onClick={() => {
                  incVote();
                }}
              >
                Add Vote
              </button>
            </p>
            {errMessage.length === 0 ? <p></p> : <p>{errMessage}</p>}
          </section>
          <Comments />
        </div>
      )}
    </main>
  );
};
