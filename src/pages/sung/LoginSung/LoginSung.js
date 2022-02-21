import React from 'react';
import './LoginSung.scss';
import { useState } from 'react';
import InputLoginSung from './InputLoginSung';

function LoginSung() {
  //

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleIdInput = e => {
    setIdValue(e.target.value);
  };
  const handlePwInput = e => {
    setPwValue(e.target.value);
  };

  const condition = idValue.includes('@') && pwValue.length > 5;

  return (
    <article className="container_login">
      <div className="mainBox_login">
        <h1 className="login_logo">westagram</h1>
        <InputLoginSung onChangeId={handleIdInput} onChangePw={handlePwInput} />
        <button
          className={condition ? 'activate_btn' : 'deactivate_btn'}
          id="loginbtn"
          type="submit"
        >
          Log in
        </button>
        <button id="forgot_password">Forgot password?</button>
      </div>
    </article>
  );
}

export default LoginSung;
