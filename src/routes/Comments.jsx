import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentsComponents/CommentCard";
import {AddACommentForm} from "./CommentsComponents/AddACommentForm";
import { getComments } from "../utils/api";

export const Comments = () => {
  const { review_id } = useParams();
  const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(review_id).then((comments) => {
      setReviewComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <div>
      <h2>Comments</h2>
      <AddACommentForm review_id={review_id} setReviewComments={setReviewComments}/>
      {isLoading ? (
        <p>Is loading</p>
      ) : (
        <div className="comment-container">
          {reviewComments.length > 0 ? (
            reviewComments.map((comment) => {
              return <CommentCard setReviewComments={setReviewComments} comment={comment} key={comment.comment_id} />;
            })
          ) : (
            <h3>No Comments yet</h3>
          )}
        </div>
      )}
    </div>
  );
};
