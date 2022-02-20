import React, { useState } from 'react';

const InputId = () => {
  const [textId, setTextId] = useState('');

  const handleIdInput = event => {
    setTextId(event.target.value);
  };

  console.log(textId);

  return (
    <input
      id="id"
      type="text"
      placeholder="전화번호, 사용자 이름 또는 이메일"
      onChange={handleIdInput}
    />
  );
};

export default InputId;
