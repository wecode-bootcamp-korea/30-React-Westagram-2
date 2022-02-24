import React from 'react';

function Comment({ content }) {
  return (
    <div className="comment">
      <p>
        <b>junzerokim</b>&nbsp;{content}
      </p>
      <img className="comment-like-logo" src="/images/cos/like.png" alt="" />
    </div>
  );
}

export default Comment;
