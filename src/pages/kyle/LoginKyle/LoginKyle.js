import React, { useState } from 'react';
import InputId from './InputId';
import InputPassword from './InputPassword';
import LoginButton from './LoginButton';
import './LoginKyle.scss';

const LoginKyle = () => {
  let [idValue, setIdValue] = useState('');
  let [isIdOn, setIdOn] = useState(false);
  let [passwordValue, setPasswordValue] = useState('');
  let [isPwOn, setPwOn] = useState(false);

  const handleIdInput = event => {
    setIdValue(event.target.value);
    idCheck(event.target.value);
  };
  function idCheck(id) {
    id.includes('@') ? setIdOn(true) : setIdOn(false);
  }

  const handlePasswordInput = event => {
    setPasswordValue(event.target.value);
    pwCheck(event.target.value);
  };
  function pwCheck(pw) {
    pw.length > 4 ? setPwOn(true) : setPwOn(false);
  }

  return (
    <main className="LoginContainer">
      <div className="loginInner">
        <h1>Westagram</h1>
        <form className="loginForm" action="">
          <InputId handleIdInput={handleIdInput} />
          <InputPassword handlePasswordInput={handlePasswordInput} />
          <LoginButton isIdOn={isIdOn} isPwOn={isPwOn} />
        </form>
        <span className="passwordContainer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </span>
      </div>
    </main>
  );
};

export default LoginKyle;
