import React, { useState, useEffect } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import { ReviewsForm } from "./ReviewsComponents/ReviewsForm";
import { ReviewsCard } from "./ReviewsComponents/ReviewsCard";
import { ErrorCustomer } from "../error/ErrorCustomer";
import { getReviews } from "../utils/api";

export const Reviews = () => {
  const { category } = useParams();
  let [searchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState("");
  
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
      setPageError("Category Not Found");
    });
  }, [category,searchParams,sortBy,sortOrder]);


  if(pageError !== ""){
    return (
      <ErrorCustomer errorName={pageError}/>
    )
  }

  return (
    <main className="page_outer">
      <h2>Reviews Page</h2>
      <ReviewsForm />
      <section className="review-card-container">
        {isLoading ? (
          <p>Page is Loading</p>
        ) : (
          reviews.map((review) => {
            return <ReviewsCard review={review} key={review.review_id} />;
          })
        )}
      </section>
    </main>
  );
};
