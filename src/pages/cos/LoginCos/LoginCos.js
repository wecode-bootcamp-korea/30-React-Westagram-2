import React, { useEffect, useState } from 'react';
import './LoginCos.scss';
import { useNavigate } from 'react-router-dom';

function LoginCos() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();
  // useEffect(
  //   () =>
  //     fetch('http://10.58.6.42:8000/users/signup', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         email: 'test@tests.com',
  //         password: '123456',
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(result => console.log('결과: ', result)),
  //   []
  // );

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.6.42:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          navigate('/main-cos');
        } else {
          alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
        }
      });
  };

  const handleIdInput = event => {
    setIdValue(event.target.value);
  };

  const handlePwInput = event => {
    setPwValue(event.target.value);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="main-title">Westagram</h1>
        <form className="login-box" onSubmit={goToMain}>
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
              className={`login-btn ${
                idValue.indexOf('@') > -1 && pwValue.length >= 5
                  ? 'login-btn-on'
                  : ''
              }`}
              onClick={goToMain}
              type="submit"
            >
              로그인
            </button>
          </div>
        </form>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginCos;
