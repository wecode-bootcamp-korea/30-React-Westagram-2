import React from 'react';
import './Comment';

function Comment(props) {
  return props.newCommentList.map((comment, index) => {
    return (
      <li key={index}>
        <span>wecode_bootcamp</span>
        {comment}
        <div className="trash-icon">
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    );
  });
}
export default Comment;

// props들 Comment로 전달!
