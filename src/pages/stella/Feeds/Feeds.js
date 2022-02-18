import './Feeds.scss';

function Feeds() {
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
            <i className="fas fa-bars hamburger"></i>
          </div>
        </div>
        <div className="main_img"></div>
        <ul className="icon">
          <div className="left">
            <li>
              <i className="fas fa-heart"></i>
            </li>
            <li>
              <i className="far fa-comment"></i>
            </li>
            <li>
              <i className="fas fa-share-square"></i>
            </li>
          </div>
          <li>
            <i className="far fa-bookmark"></i>
          </li>
        </ul>

        <div className="write">
          <div className="photo"></div>
          <span className="today_diary">
            <a
              style={{
                fontWeight: 'bold',
                color: '#000',
                fontSize: '17px',
              }}
              href="#"
            >
              seungyoun_iain
            </a>
            님 <span className="bold">외 4명</span>이 좋아합니다
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
        <ul id="todo-list"></ul>
        <form id="todo-form">
          <input type="textarea" placeholder="댓글 달기..." required />
          <button className="post">게시</button>
        </form>
      </article>
    </div>
  );
}
export default Feeds;
