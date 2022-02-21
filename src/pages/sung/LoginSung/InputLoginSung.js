import React from 'react';
import './InputLoginSung.scss';

function InputLoginSung(props) {
  return (
    <section className="login_box">
      <input
        className="elementOfLogin id_input"
        type="text"
        placeholder="Phone number, username, or email"
        onChange={props.onChangeId}
        name="idValue"
      />
      <input
        className="elementOfLogin"
        type="password"
        placeholder="Password"
        onChange={props.onChangePw}
        name="pwValue"
      />
    </section>
  );
}

export default InputLoginSung;
