import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import './Feeds.scss';

function Feeds() {
  const [textSave, setTextSave] = useState('');
  const [comments, setComments] = useState([]);
  // let [postbtn] = useState();
  //comments를 업데이트 해주는 함수 : setComments
  const addComment = event => {
    setComments([
      ...comments,
      {
        comment: textSave,
      },
    ]);
    event.preventDefault();
    event.target.reset();
  };
  //useState('')->useState([])->useEffect 순서로 실행된다.
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json()) //res라는 명칭이 중요치않음
      .then(comments => {
        setComments(comments); //useState에서 comments라는 녀석을 업데이트를 해준다
      });
  }, []);

  return (
    <div className="feeds">
      <article>
        <div id="user">
          <div className="profile">
            <a href="#" className="user">
              wecode
            </a>
            <div className="logo">
              <span>wecode_bootcamp</span>
              <span>WeCode - 위코드</span>
            </div>
          </div>
          <div className="menu_bar">
            <i className="fas fa-bars hamburger" />
          </div>
        </div>
        <div className="main_img" />
        <ul className="icon">
          <div className="left">
            <li>
              <i className="fas fa-heart" />
            </li>
            <li>
              <i className="far fa-comment" />
            </li>
            <li>
              <i className="fas fa-share-square" />
            </li>
          </div>
          <li>
            <i className="far fa-bookmark" />
          </li>
        </ul>

        <div className="write">
          <div className="photo" />
          <span className="today_diary">
            <a href="#">seungyoun_iain</a>님{' '}
            <span className="bold">외 4명</span>이 좋아합니다
          </span>
        </div>
        <div className="chat">
          <span className="commentId">
            wecode_bootcamp
            <span className="commentText">
              "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서
              배우고 저는 5개의 회사에서 오퍼를 받았습니다. - Wecode 졸업생
              강병진님"..
            </span>
            <button className="more_btn">더 보기</button>
          </span>
          <span className="timeout">
            <b>54</b>분전 ..
          </span>
        </div>
        <Comments comments={comments} />
        <form id="todo-form" onSubmit={addComment}>
          <input
            type="text"
            placeholder="댓글 달기..."
            onKeyUp={e => {
              setTextSave(e.target.value);
            }}
            required
          />
          <button className={textSave ? 'btnActive' : 'btnDie'} type="submit">
            게시
          </button>
        </form>
      </article>
    </div>
  );
}
export default Feeds;
