import React, { useState } from 'react';

const InputPassword = () => {
  const [textPassword, setTextPassword] = useState('');

  const handlePasswordInput = event => {
    setTextPassword(event.target.value);
  };

  console.log(textPassword);

  return (
    <input
      id="pw"
      type="password"
      placeholder="비밀번호"
      onChange={handlePasswordInput}
    />
  );
};

export default InputPassword;
