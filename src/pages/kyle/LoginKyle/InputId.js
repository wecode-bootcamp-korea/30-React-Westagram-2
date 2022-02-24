import React from 'react';

const InputId = props => {
  return (
    <input
      id="id"
      type="text"
      placeholder="전화번호, 사용자 이름 또는 이메일"
      onChange={props.handleIdInput}
    />
  );
};

export default InputId;
