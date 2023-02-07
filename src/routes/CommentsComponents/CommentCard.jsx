import React from 'react'

export const CommentCard = ({comment}) => {
  return (
    <div className="comment">
        <h3>{comment.author}'s Comment</h3>
        <p>{comment.body}</p>
        <p>{comment.created_at.substring(0,10)}</p>
        <p>Votes: {comment.votes}</p>
    </div>
  )
}
