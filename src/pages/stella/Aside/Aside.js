import './Aside.scss';
import Footer from '../Footer/Footer';

function Aside() {
  return (
    <>
      <div className="main-right">
        <div className="inner">
          <div className="userMain">
            <a href="#">>wecode</a>
            <div className="main_user">
              <span className="userName">wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </div>
          <div className="insta-story">
            <div className="intro_story">
              <h2>스토리</h2>
              <button className="all">모두 보기</button>
            </div>
            <ul className="story">
              <li className="set">
                <div className="pic1"></div>
                <div className="others">
                  <span>alexishyuni</span>
                  <span>2시간 전</span>
                </div>
              </li>
            </ul>
            <ul className="story">
              <li className="set">
                <div className="pic2"></div>
                <div className="others">
                  <span>jminkeek</span>
                  <span>1시간 전</span>
                </div>
              </li>
            </ul>
            <ul className="story">
              <li className="set">
                <div className="pic3"></div>
                <div className="others">
                  <span>drink_eat_drink</span>
                  <span>13분 전</span>
                </div>
              </li>
            </ul>
            <ul className="story">
              <li className="set">
                <div className="pic4"></div>
                <div className="others">
                  <span>bebe_sunnie</span>
                  <span>8분 전</span>
                </div>
              </li>
            </ul>
            <ul className="story">
              <li className="set">
                <div className="pic5"></div>
                <div className="others">
                  <span>dlwlrma</span>
                  <span>3분 전</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommend">
            <div className="intro_recommend">
              <h2>회원님을 위한 추천</h2>
              <button className="all">모두 보기</button>
            </div>

            <ul className="follow">
              <li className="sett">
                <div className="picc1"></div>
                <div className="other_p">
                  <span>bowerbird_sym</span>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <div className="add_follow">
                  <a
                    style={{
                      color: 'rgb(30, 145, 194)',
                      fontWeight: 'bold',
                    }}
                    href="#"
                  >
                    팔로우
                  </a>
                </div>
              </li>
            </ul>
            <ul className="follow">
              <li className="sett">
                <div className="picc2"></div>
                <div className="other_p">
                  <span>baekyoungk89</span>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <div className="add_follow">
                  <a
                    style={{
                      color: 'rgb(30, 145, 194)',
                      fontWeight: 'bold',
                    }}
                    href="#"
                  >
                    팔로우
                  </a>
                </div>
              </li>
            </ul>
            <ul className="follow">
              <li className="sett">
                <div className="picc3"></div>
                <div className="other_p">
                  <span>smileday.wjkm</span>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <div className="add_follow">
                  <a
                    style={{
                      color: 'rgb(30, 145, 194)',
                      fontWeight: 'bold',
                    }}
                    href="#"
                  >
                    팔로우
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Aside;
