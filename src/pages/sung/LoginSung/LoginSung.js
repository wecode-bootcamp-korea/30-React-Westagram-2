import React from 'react';
import './LoginSung.scss';
import InputLoginSung from './InputLoginSung';

class LoginSung extends React.Component {
  //
  constructor() {
    super();
    this.state = {
      inputValue: { idValue: '', pwValue: '' },
      isButtonOn: false,
    };
  }
  //
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      inputValue: { ...this.state.inputValue, [name]: value },
    });
  };

  render() {
    return (
      <article className="container_login">
        <div className="mainBox_login">
          <h1 className="login_logo">westagram</h1>
          <InputLoginSung getInput={this.handleInput} />
          <button className="loginbtn deactivate_btn">Log in</button>
          <button id="forgot_password">Forgot password?</button>
        </div>
      </article>
    );
  }
}

export default LoginSung;
