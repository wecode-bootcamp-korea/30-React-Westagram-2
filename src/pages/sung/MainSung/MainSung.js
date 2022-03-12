import React, { Component } from 'react';
import './MainSung.scss';
import Nav from '../../../components/Nav/Nav';
import { useState, useEffect } from 'react';
import Comment from './Comment';

function MainSung() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  // 댓글 입력, 댓글 추가

  // 구조분해할당

  const getComment = e => {
    //console.log(e);
    setComment(e.target.value);
  };

  const addComment = e => {
    setCommentList(
      commentList.concat([
        {
          author: 'sunghoon',
          comment: comment,
        },
      ])
    );
    e.preventDefault();
    setComment('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/mock.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  return (
    <>
      <Nav />
      <div className="main">
        {/* <!-- main Section --> */}
        <main className="main_section">
          {/* <!-- main_left_box --> */}
          <div className="feeds">
            <div id="post">
              <div className="account_name">
                <div className="story">
                  <img
                    src="/images/sung/coming_up.png"
                    alt="logo"
                    className="profile_logo"
                    id="profile_pic_in_post"
                  />
                  <div className="texts_in_account_box">
                    <h4>_yummy_apple</h4>
                  </div>
                </div>
              </div>
              <div className="post_img"></div>
              <div className="features_box">
                <div className="menus">
                  <li className="features_icon">
                    <i className="far fa-heart"></i>
                  </li>
                  <li className="features_icon">
                    <i className="far fa-comment"></i>
                  </li>
                  <li className="features_icon">
                    <i className="far fa-share-square"></i>
                  </li>
                </div>
                <div className="menus">
                  <li className="bookmark_icon">
                    <i className="far fa-bookmark"></i>
                  </li>
                </div>
              </div>
              <div className="likes">
                <div className="story">
                  <img
                    src="/images/sung/coming_up.png"
                    alt="a profile"
                    className="profile_logo"
                    id="profile_pic_in-likes"
                  />
                  <div className="texts_in_likes">
                    <h4>
                      <span>aineworld</span>님 외 <span>10명</span>이 좋아합니다
                    </h4>
                  </div>
                </div>
              </div>
              <div id="comment_box">
                <ul id="new_comment">
                  <Comment newCommentList={commentList} />
                </ul>
              </div>
              <div className="new_comment_box">
                <form className="comment_form" onSubmit={addComment}>
                  <input
                    type="text"
                    onChange={getComment}
                    //onChange값은 변화를 감지하면 어떤 것을 할지
                    // 그것이 getComment
                    // value={comment}
                    // -> 나중에 쓸지도 모름
                    placeholder="Add a comment"
                    id="comment_input"
                    value={comment}
                  />
                  <button id="post_button">
                    {/* form 안에있는 button은 default 로 submit 을 하는데 type 을 button 으로 주면 그 default가 작동 안함  */}
                    post
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- main_right_box--> */}
          <div className="main-right">
            <div className="account_box">
              <img
                src="/images/sung/wecode.png"
                alt="logo"
                className="profile_logo"
              />
              <div className="texts_in_account_box">
                <h4>wecode_bootcamp</h4>
                <h5 className="info_under_name">WeCode | 위코드</h5>
              </div>
            </div>
            {/* <!--first box in the right side  --> */}
            <div className="side_box_setup">
              <div className="box_name">
                <h5 className="color_h5">스토리</h5>
                <h5>모두 보기</h5>
              </div>
              <div className="story">
                <img
                  src="/images/sung/favicon.png"
                  alt="logo"
                  className="profile_logo clickable"
                />
                <div className="texts_in_account_box">
                  <h4>_yum_s</h4>
                  <h5 className="info_under_name">15분 전</h5>
                </div>
              </div>
              <div className="story">
                <img
                  src="/images/sung/ironman.png"
                  alt="logo"
                  className="profile_logo"
                  id="clickable"
                />
                <div className="texts_in_account_box">
                  <h4>drink_eat_drink</h4>
                  <h5 className="info_under_name">3시간 전</h5>
                </div>
              </div>
              <div className="story">
                <img
                  src="/images/sung/profile.png"
                  alt="logo"
                  className="profile_logo"
                  id="clickable"
                />
                <div className="texts_in_account_box">
                  <h4>hyukyc</h4>
                  <h5 className="info_under_name">20시간 전</h5>
                </div>
              </div>
              <div className="story">
                <img
                  src="/images/sung/profile_1.png"
                  alt="logo"
                  className="profile_logo"
                  id="clickable"
                />
                <div className="texts_in_account_box">
                  <h4>cskang_93</h4>
                  <h5 className="info_under_name">15분 전</h5>
                </div>
              </div>
            </div>
            {/* <!--second box in the right side  --> */}
            <div className="side_box_setup" id="recommned_section">
              <div className="box_name">
                <h5 className="color_h5">회원님을 위한 추천</h5>
                <h5>모두 보기</h5>
              </div>
              <div id="recommend_box">
                <div className="story">
                  <img
                    src="/images/sung/workout_1.png"
                    alt="logo"
                    className="profile_logo"
                  />
                  <div className="texts_in_account_box">
                    <h4>joaaaaaaahye</h4>
                    <h5 className="info_under_name">jimmylee1220님 외1...</h5>
                  </div>
                </div>
                <button className="follow_btn">팔로우</button>
              </div>
              <div id="recommend_box">
                <div className="story">
                  <img
                    src="/images/sung/workout_3.png"
                    alt="logo"
                    className="profile_logo"
                  />
                  <div className="texts_in_account_box">
                    <h4>shawnkjjoo</h4>
                    <h5 className="info_under_name">_legend_a님 외 2명이...</h5>
                  </div>
                </div>
                <button className="follow_btn">팔로우</button>
              </div>
              <div id="recommend_box">
                <div className="story">
                  <img
                    src="/images/sung/workout_5.png"
                    alt="logo"
                    className="profile_logo"
                  />
                  <div className="texts_in_account_box">
                    <h4>rampart81</h4>
                    <h5 className="info_under_name">
                      ringo.in.seoun님 외 12..
                    </h5>
                  </div>
                </div>
                <button className="follow_btn">팔로우</button>
              </div>
            </div>
            <div className="side_box_setup" id="copyright_box">
              <div className="box_name" id="copyright">
                <h5 className="color_h5">
                  Westagram &nbsp; 정보 지원 홍보 센터 API 채용정보
                  <p>개인정보처리방침 약관</p>
                </h5>
                <h5 className="color_h5">디렉터리 프로필 해시태그 언어 </h5>{' '}
                <h5 className="color_h5">@ 2022 WESTAGRAM</h5>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default MainSung;
