import React from 'react';
import './LoginStella.scss';

function LoginStella() {
  return (
    <div className="login">
      <div className="wrap">
        <h1>Westagram</h1>
        <form>
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="password" type="password" placeholder="비밀번호" />
          <button id="btn" className="disabled">
            로그인
          </button>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </div>
  );
}

export default LoginStella;
