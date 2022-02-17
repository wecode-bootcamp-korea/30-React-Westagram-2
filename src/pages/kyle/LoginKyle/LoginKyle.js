import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKyle.scss';

function LoginKyle() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main-Kyle');
  };

  return (
    <main className="LoginContainer">
      <div className="loginInner">
        <h1>Westagram</h1>
        <form className="loginForm" action="">
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="pw" type="password" placeholder="비밀번호" />
          {/* disabled */}
          <button id="loginBtn" type="button" onClick={goToMain}>
            로그인
          </button>
        </form>
        <span className="passwordContainer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </span>
      </div>
    </main>
  );
}

export default LoginKyle;
