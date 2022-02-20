import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStella.scss';

function LoginStella() {
  let [loginId, setLoginId] = useState('');
  let [loginPw, setLoginPw] = useState('');
  let [loginCheck, setLoginCheck] = useState('');
  const navigate = useNavigate();
  //[변수 , 함수]
  function handleIdInput(event) {
    setLoginId(event.target.value);
  }
  function handlePwInput(event) {
    setLoginPw(event.target.value);
  }

  function loginInspect(event) {
    loginId.includes('@') && loginPw.length > 4
      ? setLoginCheck(true)
      : setLoginCheck(false);
  }

  function mainCondition(event) {
    loginCheck ? navigate('/main-stella') : alert('다시 확인해주세요.');
  }

  return (
    <div className="login">
      <div className="wrap">
        <h1>Westagram</h1>
        <form>
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={loginInspect}
          />
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={loginInspect}
          />
          <button
            id="btn"
            className="disabled"
            onClick={mainCondition}
            style={
              loginCheck
                ? { backgroundColor: `rgb(59, 125, 240)`, cursor: 'pointer' }
                : {
                    backgroundColor: `rgb(188, 224, 250)`,
                    cursor: 'not-allowed',
                  }
            }
          >
            로그인
          </button>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </div>
  );
}

export default LoginStella;
