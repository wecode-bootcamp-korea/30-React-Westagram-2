import React from 'react';
import './LoginSung.scss';
import { useState } from 'react';
import InputLoginSung from './InputLoginSung';
import { useNavigate } from 'react-router-dom';

function LoginSung() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const handleIdInput = e => {
    setIdValue(e.target.value);
  };
  const handlePwInput = e => {
    setPwValue(e.target.value);
  };

  const condition = idValue.includes('@') && pwValue.length > 5;

  const goToMain = () => {
    fetch('http://10.58.5.208:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        first_name: 'Sung',
        last_name: 'Kang',
        email: idValue,
        password: pwValue,
        phone_number: '0102145325325',
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과: ', result);
        if (result.message === 'SUCCESS') {
          navigate('/main-sung');
        } else if (result.message === 'KEY_ERROR') {
          alert('Key Error!');
        } else if (result.message === 'INVALID_USER') {
          alert('Invalid user!');
        }
      });
  };

  return (
    <article className="container_login">
      <div className="mainBox_login">
        <h1 className="login_logo">westagram</h1>
        <InputLoginSung onChangeId={handleIdInput} onChangePw={handlePwInput} />
        <button
          className={condition ? 'activate_btn' : 'deactivate_btn'}
          id="loginbtn"
          type="submit"
          onClick={goToMain}
        >
          Log in
        </button>
        <button id="forgot_password">Forgot password?</button>
      </div>
    </article>
  );
}

export default LoginSung;
