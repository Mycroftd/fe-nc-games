import React, { useState } from "react";
import {postReview} from '../../utils/api';

export const AddACommentForm = ({ review_id,setReviewComments }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [messageErrorMsg, setmessageErrorMsg] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState("");

  const commentFormSubmit = (e) =>{
    e.preventDefault();
    setUsernameErrorMsg("");
    setmessageErrorMsg("");
    setUsernameErrMsg("");
    let isError = false;
    if(username.length === 0){
        setUsernameErrorMsg("Please fill in your username");
        isError = true;
    }   
    if(comment.length ===0){
        setmessageErrorMsg("Please fill in your comment");
        isError = true;
    }
    if(!isError){
        postReview(review_id, username, comment).then((review)=>{
          setUsername("");
          setComment("");
            setReviewComments(((PrevReviews) =>{
                return [review,...PrevReviews];
            }));
        }).catch((error) => {          
          if(error.response.data.msg === "review does not exist" ){
            setUsernameErrMsg("User does not Exist");
          }
        })
    }
  } 

  return (
    <div className="commentForm">
      <form onSubmit={(e)=>{commentFormSubmit(e)}}>
        <h3>Add A Comment</h3>
        <div>
          <label htmlFor="username">username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            name="username"
          ></input>
          {usernameErrorMsg.length===0?(null):(<span>{usernameErrorMsg}</span>)}
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea value = {comment} onChange={(e) => setComment(e.target.value)} id="comment" name="comment" />
          {messageErrorMsg.length===0?(null):(<span>{messageErrorMsg}</span>)}
        </div>
        <button type="submit">Add</button>
        {usernameErrMsg.length===0?(null):(<span>{usernameErrMsg}</span>)}
      </form>
    </div>
  );
};
