import React from "react";
import { deleteComment } from "../../utils/api";

export const CommentCard = ({ comment,setReviewComments }) => {

  const deleteCommentOnClick = (e, commentId) => {
    e.currentTarget.disabled = true;
    deleteComment(commentId).then(() => {
      setReviewComments((comments) =>{
        let copiedComments = [...comments];
        return copiedComments.filter((comment) => {
          return comment.comment_id !== commentId;
        })
      });
    });
  };

  return (
    <div className="comment">
      <h3>{comment.author}'s Comment</h3>
      <p>{comment.body}</p>
      <p>{comment.created_at.substring(0, 10)}</p>
      <p>Votes: {comment.votes}</p>
      <button
        onClick={(e) => {
          deleteCommentOnClick(e, comment.comment_id);
        }}
      >
        Delete Comment
      </button>
    </div>
  );
};
