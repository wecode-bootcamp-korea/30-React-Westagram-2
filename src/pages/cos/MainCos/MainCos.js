import React, { useEffect, useRef, useState } from 'react';
import './MainCos.scss';
import Nav from '../../../components/Nav/Nav';
import CommentList from './CommentList';

function MainCos() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  let strs = '';
  const getComment = e => {
    strs += e.target.value;
    setComment(strs);
  };

  const addComment = e => {
    e.preventDefault();
    setCommentList([...commentList, { name: comment, content: comment }]);
  };

  return (
    <>
      <Nav />
      <div className="main">
        <main className="main-content">
          <div className="feeds">
            <article className="main-article">
              <div className="user">
                <div className="user-info">
                  <img
                    className="profile"
                    src="/images/cos/wallpaper.png"
                    alt="profile"
                  />
                  <h3 className="user-name">junzerokim</h3>
                </div>
                <div className="more">
                  <img className="more-img" src="/images/cos/more.png" alt="" />
                </div>
              </div>
              <img className="feed-photo" src="/images/cos/danbi.png" alt="" />
              <div className="feed-container">
                <div className="feed-info">
                  <img
                    className="like-logo logo"
                    src="/images/cos/like.png"
                    alt=""
                  />
                  <img
                    className="comment-logo logo"
                    src="/images/cos/comment.png"
                    alt=""
                  />
                  <img
                    className="share-logo logo"
                    src="/images/cos/share.png"
                    alt=""
                  />
                </div>
                <div className="feed-save">
                  <img className="save" src="/images/cos/save.png" alt="save" />
                </div>
              </div>

              <div className="like-info">
                <img
                  className="like-user-photo"
                  src="/images/cos/wallpaper.png"
                  alt="like-users"
                />
                <p className="like-users">
                  <b>_danbi_22</b>님 <b>외 10명</b>이 좋아합니다
                </p>
              </div>
              <CommentList commentList={commentList} />
              <form className="comment-write" onSubmit={addComment}>
                <input
                  className="comment-box"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={getComment}
                />
                <button className="comment-btn">게시</button>
              </form>
            </article>
          </div>
          <div className="main-right">
            <div className="user-main">
              <img
                className="profile"
                src="/images/cos/wallpaper.png"
                alt="profile"
              />
              <div className="user-main-info">
                <p className="user-main-id">
                  <b>junzerokim</b>
                </p>
                <p className="user-main-detail">김준영</p>
              </div>
            </div>
            <div className="story">
              <div className="story-nav">
                <div className="story-title">
                  <b>스토리</b>
                </div>
                <b>
                  <div className="story-all">
                    <b>모두 보기</b>
                  </div>
                </b>
              </div>
              <div className="story-user">
                <div className="story-user-info">
                  <img
                    className="profile"
                    src="/images/cos/wallpaper.png"
                    alt=""
                  />
                  <div className="story-user-id">
                    <p className="story-user-id-name">
                      <b>_danbi_22</b>
                    </p>
                    <p className="story-upload-time">45분 전</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="recommend">
              <div className="recommend-nav">
                <div className="recommend-for-you">
                  <b>회원님을 위한 추천</b>
                </div>
                <div className="recommend-all">
                  <b>모두 보기</b>
                </div>
              </div>
              <div className="recommend-user">
                <div className="recommend-user-info">
                  <img
                    className="profile"
                    src="/images/cos/wallpaper.png"
                    alt=""
                  />
                  <div className="recommend-user-id">
                    <p className="recommend-user-id-name">
                      <b>v_bee2</b>
                    </p>
                    <p className="recommend-upload-time">
                      _danbi_22님 외 12명이 ...
                    </p>
                  </div>
                  <div className="recommend-user-follow">
                    <p className="recommend-user-follow-btn">
                      <b>팔로우</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="company-info">
              <p className="company-detail">
                Instagram 정보 · 지원 · 홍보 센터 · API ·<br /> 채용 정보 ·
                개인정보처리방침 · 약관 ·<br /> 디렉터리 · 프로필 · 해시태그 ·
                언어
              </p>
              <p className="company-name">ⓒ 2019 INSTAGRAM</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainCos;
