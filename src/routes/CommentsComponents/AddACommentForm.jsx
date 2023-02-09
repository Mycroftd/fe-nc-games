import React, { useState,useContext } from "react";
import {postReview} from '../../utils/api';
import { UserContext } from "../../context/UserProvider";

export const AddACommentForm = ({ review_id,setReviewComments }) => {
  const userValue = useContext(UserContext);
  const username = userValue.loggedInUser;
  const [comment, setComment] = useState("");
  const [messageErrorMsg, setmessageErrorMsg] = useState("");
  const [submitErrorMessage, setsubmitErrorMessage] = useState("");

  const commentFormSubmit = (e) =>{
    e.preventDefault();
    setmessageErrorMsg("");
    setsubmitErrorMessage("")
    let isError = false;
    if(comment.length ===0){
        setmessageErrorMsg("Please fill in your comment");
        isError = true;
    }
    if(!isError){
        postReview(review_id, username, comment).then((review)=>{
          setComment("");
            setReviewComments(((PrevReviews) =>{
                return [review,...PrevReviews];
            }));
        }).catch((error) => {          
          setsubmitErrorMessage("Error Submitting");          
        })
    }
  } 

  return (
    <div className="commentForm">
      <form onSubmit={(e)=>{commentFormSubmit(e)}}>
        <h3>Add A Comment {username}</h3>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea value = {comment} onChange={(e) => setComment(e.target.value)} id="comment" name="comment" />
          {messageErrorMsg.length===0?(null):(<span>{messageErrorMsg}</span>)}
        </div>
        <button type="submit">Add</button>
        {submitErrorMessage.length===0?(null):(<span>{submitErrorMessage}</span>)}
      </form>
    </div>
  );
};
