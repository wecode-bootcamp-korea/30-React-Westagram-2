import React from 'react';
import './InputLoginSung.scss';

class InputLoginSung extends React.Component {
  render() {
    const { getInput } = this.props;

    return (
      <section className="login_box">
        <input
          className="elementOfLogin id_input"
          type="text"
          placeholder="Phone number, username, or email"
          onChange={this.props.getInput}
          name="idValue"
        />
        <input
          className="elementOfLogin"
          type="password"
          placeholder="Password"
          onChange={this.props.getInput}
          name="pwValue"
        />
      </section>
    );
  }
}

export default InputLoginSung;
