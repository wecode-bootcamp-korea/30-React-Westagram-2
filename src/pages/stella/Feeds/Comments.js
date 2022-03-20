import React from 'react';

function Comments(props) {
  console.log(props);
  return (
    <ul id="todo-list" className="items">
      {props.comments.map(comment => (
        <li key={comment.id} className="comment-fillin">
          <span className="newcomment-id">bts_bighit</span>
          <span className="newcomment-text" style={{ fontSize: '17px' }}>
            {comment.comment}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Comments;
