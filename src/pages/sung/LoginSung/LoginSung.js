import React from 'react';
import './LoginSung.scss';

function LoginSung() {
  return (
    <article className="container_login">
      <div className="mainBox_login">
        <h1 className="login_logo">westagram</h1>
        <div className="login_box">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            id="id_input"
            className="elementOfLogin"
          />
          <input
            type="password"
            id="password_input"
            placeholder="Password"
            className="elementOfLogin"
          />
          <button className="loginbtn deactivate_btn">Log in</button>
        </div>
        <button id="forgot_password">Forgot password?</button>
      </div>
    </article>
  );
}

export default LoginSung;
