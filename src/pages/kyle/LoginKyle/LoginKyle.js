import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputId from './InputId';
import InputPassword from './InputPassword';
import './LoginKyle.scss';

const LoginKyle = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main-Kyle');
  };

  return (
    <main className="LoginContainer">
      <div className="loginInner">
        <h1>Westagram</h1>
        <form className="loginForm" action="">
          <InputId />
          <InputPassword />
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
};

export default LoginKyle;
