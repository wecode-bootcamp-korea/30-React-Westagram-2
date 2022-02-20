const InputPassword = props => {
  return (
    <input
      id="pw"
      type="password"
      placeholder="비밀번호"
      onChange={props.handlePasswordInput}
    />
  );
};

export default InputPassword;
