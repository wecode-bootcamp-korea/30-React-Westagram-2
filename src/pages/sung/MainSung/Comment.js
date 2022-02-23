import React from 'react';
import './Comment';

function Comment(props) {
  return props.newCommentList.map((comment, index) => {
    return (
      <li className="eachComment" key={index}>
        <span>
          {comment.author} {comment.comment}
        </span>
        <span>&nbsp;</span>
        <span className="trash-icon">
          <i className="far fa-trash-alt"></i>
        </span>
      </li>
    );
  });
}
export default Comment;

// props들 Comment로 전달!
