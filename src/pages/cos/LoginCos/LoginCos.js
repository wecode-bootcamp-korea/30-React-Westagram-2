import React, { useState } from 'react';
import './LoginCos.scss';
import { useNavigate } from 'react-router-dom';

function LoginCos() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({
    backgroundColor: '#B1DFFC',
    cursor: 'default',
  });

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-cos');
  };

  const handleIdInput = event => {
    setIdValue(event.target.value);
    checkResult();
  };

  const handlePwInput = event => {
    setPwValue(event.target.value);
    checkResult();
  };

  const checkId = value => {
    return value.includes('@') ? true : false;
  };

  const checkPw = value => {
    return value.length >= 5 ? true : false;
  };

  const checkResult = () => {
    const isValidId = checkId(idValue);
    const isValidPw = checkPw(pwValue);

    if (isValidId && isValidPw) {
      loginBtn(true);
    } else {
      loginBtn(false);
    }
  };

  const loginBtn = btn => {
    setDisabled(!btn);
    setStyle({
      backgroundColor: btn ? '#0695F6' : '#B1DFFC',
      cursor: btn ? 'pointer' : 'default',
    });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="main-title">Westagram</h1>
        <div className="login-box">
          <div className="id-box box">
            <input
              type="text"
              id="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
          </div>
          <div className="password-box box">
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
          </div>
          <div className="login-btn-box">
            <button
              disabled={loginBtn}
              className="login-btn login-btn-after"
              onClick={goToMain}
              type="submit"
              style={style}
            >
              로그인
            </button>
          </div>
        </div>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginCos;
