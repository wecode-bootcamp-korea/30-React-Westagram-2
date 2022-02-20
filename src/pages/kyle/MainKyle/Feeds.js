import './Feeds.scss';

function Feeds() {
  return (
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

          <div className="write">
            <div className="photo">
              <img
                src="https://gunhee-jeong.github.io/assets/images/blogMe1.jpeg"
                alt="프로필 사진"
                className="profileImg"
              />
            </div>
            <span className="today_diary">
              <a
                style={{
                  fontWeight: 'bold',
                  color: '#000',
                  fontSize: '17px',
                }}
                href="#"
              >
                gunhee_jeong
              </a>
              님 <span className="bold">외 9명</span>이 좋아합니다
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
              <b>11</b>분전 ..
            </span>
          </div>

          <ul id="todo-list" />
          <form id="todo-form">
            <input type="textarea" placeholder="댓글 달기..." />
            <button className="post">게시</button>
          </form>
        </div>
      </article>
    </div>
  );
}

export default Feeds;
