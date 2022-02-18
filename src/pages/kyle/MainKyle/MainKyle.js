import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainKyle.scss';

const MainKyle = () => {
  return (
    <div className="Main">
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="feedsHeader">
              <div className="user">
                <img
                  src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                  alt="프로필 사진"
                  className="profileImg"
                />
                <span>gunhee_jeong</span>
              </div>
              <i className="fas fa-bars hamburger" />
            </div>
            <img
              src="images/kyle/jeju.jpeg"
              alt="제주도 하늘"
              className="feedPhoto"
            />
            <div className="commentWrapper">
              <div className="menuNav">
                <div className="conversation">
                  <i className="fas fa-heart" />
                  <i className="far fa-comment" />
                  <i className="fas fa-share-square" />
                </div>
                <div className="save">
                  <i className="far fa-bookmark" />
                </div>
              </div>
              <div>좋아요 574개</div>
              <div className="commentlike">
                <div className="likeSession" />
                <p>
                  <span className="name">gunhee</span>님 외 xx명이 좋아합니다
                </p>
              </div>
              <ul className="commentLists">
                <li>
                  <span className="name">gunhee</span>
                  <span>제주도 푸른밤</span>
                  <span className="delete">x</span>
                </li>
              </ul>
            </div>
            <form id="comment">
              <input
                id="commentInput"
                type="textarea"
                placeholder="댓글 달기..."
                required
              />
              <button id="submit">게시</button>
            </form>
          </article>
        </div>
        <aside className="main-right">
          <div className="recommendation">
            <div>스토리</div>
            <ul>
              <li>
                <div className="image">
                  <img
                    src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                    alt="프로필 사진"
                    className="avatarImage"
                  />
                </div>
                <div className="info">
                  <div className="recoId">gunhee</div>
                  <div>gunhee님이 팔로우합니다.</div>
                </div>
                <a
                  style={{
                    color: 'rgb(30, 145, 194)',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  팔로우
                </a>
              </li>
              <li>
                <div className="image">
                  <img
                    src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                    alt="프로필 사진"
                    className="avatarImage"
                  />
                </div>
                <div className="info">
                  <div className="recoId">gunhee</div>
                  <div>gunhee님이 팔로우합니다.</div>
                </div>
                <a
                  style={{
                    color: 'rgb(30, 145, 194)',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  팔로우
                </a>
              </li>
              <li>
                <div className="image">
                  <img
                    src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                    alt="프로필 사진"
                    className="avatarImage"
                  />
                </div>
                <div className="info">
                  <div className="recoId">gunhee</div>
                  <div>gunhee님이 팔로우합니다.</div>
                </div>
                <a
                  style={{
                    color: 'rgb(30, 145, 194)',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  팔로우
                </a>
              </li>
              <li>
                <div className="image">
                  <img
                    src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                    alt="프로필 사진"
                    className="avatarImage"
                  />
                </div>
                <div className="info">
                  <div className="recoId">gunhee</div>
                  <div>gunhee님이 팔로우합니다.</div>
                </div>
                <a
                  style={{
                    color: 'rgb(30, 145, 194)',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  팔로우
                </a>
              </li>
              <li>
                <div className="image">
                  <img
                    src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                    alt="프로필 사진"
                    className="avatarImage"
                  />
                </div>
                <div className="info">
                  <div className="recoId">gunhee</div>
                  <div>gunhee님이 팔로우합니다.</div>
                </div>
                <a
                  style={{
                    color: 'rgb(30, 145, 194)',
                    fontWeight: 'bold',
                  }}
                  href="#"
                >
                  팔로우
                </a>
              </li>
            </ul>
            <div className="Profile">
              <div className="avatar" />
              <div />
            </div>
            <div />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default MainKyle;
