import React, { useState, useEffect } from 'react';
import './CommentList.scss';
import Comment from './Comment';

function CommentList({ commentList }) {
  return (
    <div className="comment-info">
      {commentList.map(comment => {
        return (
          <Comment
            key={comment.id}
            userName={comment.userName}
            content={comment.content}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
