import React, { useState,useContext } from "react";
import {postReview} from '../../utils/api';
import { UserContext } from "../../context/UserProvider";

export const AddACommentForm = ({ review_id,setReviewComments,setMessage }) => {
  const userValue = useContext(UserContext);
  const username = userValue.loggedInUser;
  const [comment, setComment] = useState("");
  const [messageErrorMsg, setmessageErrorMsg] = useState("");
  const [submitErrorMessage, setsubmitErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const commentFormSubmit = (e) =>{    
    e.preventDefault();
    setConfirmMessage("");
    setmessageErrorMsg("");
    setsubmitErrorMessage("")
    setMessage("");
    let isError = false;
    if(comment.length ===0){
        setmessageErrorMsg("Please fill in your comment");
        isError = true;
    }
    if(!isError){
        postReview(review_id, username, comment).then((review)=>{
          setComment("");
          setConfirmMessage("Comment Posted");
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
        {username === ""?(<p>Please Login To Leave A Comment</p>):null}
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea onClick={()=>{setConfirmMessage("")}} disabled={username === ""?true:false} value = {comment} onChange={(e) => setComment(e.target.value)} id="comment" name="comment" />
          {messageErrorMsg.length===0?(null):(<span>{messageErrorMsg}</span>)}
        </div>
        {confirmMessage === ""? null:(<p>Comment Posted</p>)}
        <button disabled={username === ""?true:false} type="submit">Add</button>
        {submitErrorMessage.length===0?(null):(<span>{submitErrorMessage}</span>)}
      </form>
    </div>
  );
};
