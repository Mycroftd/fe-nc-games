import React, { useContext } from "react";
import { deleteComment } from "../../utils/api";
import { UserContext } from "../../context/UserProvider";

export const CommentCard = ({ comment, setReviewComments, setMessage }) => {
  const userValue = useContext(UserContext);
  const username = userValue.loggedInUser;



  const deleteCommentOnClick = (e, commentId) => {
    e.currentTarget.disabled = true;
    setMessage("");
    deleteComment(commentId)
      .then(() => {
        setReviewComments((comments) => {
          let copiedComments = [...comments];
          return copiedComments.filter((comment) => {
            return comment.comment_id !== commentId;
          });
        });
        setMessage("Comment Deleted");
      })
      .catch((error) => {
        setMessage("Error Deleting the Comment");
      });
  };

  return (
    <div className="comment">
      <h3>{comment.author}'s Comment</h3>
      <p>{comment.body}</p>
      <p>{comment.created_at.substring(0, 10)}</p>
      <p>Votes: {comment.votes}</p>
      {username === comment.author ? (
        <button
          onClick={(e) => {
            deleteCommentOnClick(e, comment.comment_id);
          }}
        >
          Delete Comment
        </button>
      ) : null}
    </div>
  );
};
