import React, { useState } from 'react';
import InputId from './InputId';
import InputPassword from './InputPassword';
import LoginButton from './LoginButton';
import './LoginKyle.scss';

const LoginKyle = () => {
  let [valueId, setIdValue] = useState('');
  let [valuePw, setPasswordValue] = useState('');
  // let [isBtnOn, setBtnOn] = useState(false);
  let isBtnOn = false;

  //1번: ID value & Pw value 저장
  const handleIdInput = event => {
    setIdValue(event.target.value);
  };
  const handlePasswordInput = event => {
    setPasswordValue(event.target.value);
  };

  console.log(`저장된 ID 값 ->`, valueId);
  console.log(`저장된 PW 값 ->`, valuePw);

  //ID 유효성 검사
  const checkLogin = (id, pw) => {
    const LoginValid = id.includes('@') && pw.length >= 5;
    isBtnOn = LoginValid;
    console.log(isBtnOn);
  };

  checkLogin(valueId, valuePw);
  console.log(`로그인 기능의 활성화가 ->`, isBtnOn);

  return (
    <main className="LoginContainer">
      <div className="loginInner">
        <h1>Westagram</h1>
        <form className="loginForm">
          <InputId handleIdInput={handleIdInput} />
          <InputPassword handlePasswordInput={handlePasswordInput} />
          <LoginButton isBtnOn={isBtnOn} />
        </form>
        <span className="passwordContainer">
          <a href="#">비밀번호를 잊으셨나요? {valueId}</a>
        </span>
      </div>
    </main>
  );
};

export default LoginKyle;
