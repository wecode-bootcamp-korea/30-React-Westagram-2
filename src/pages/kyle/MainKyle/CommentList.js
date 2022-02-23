import { useState, useEffect } from 'react';

function CommentList(props) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setCommentList(data));
  }, []);

  // console.log(setCommentList);

  return (
    <div>
      <ul>
        <li />
      </ul>
    </div>
  );
}

export default CommentList;
