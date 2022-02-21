import { useNavigate } from 'react-router-dom';

const LoginButton = props => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main-Kyle');
  };

  return (
    <button
      id="loginBtn"
      type="button"
      disabled
      onClick={goToMain}
      style={{
        backgroundColor: props.isBtnOn ? '#0095F6' : '#C0DFFD',
      }}
    >
      로그인
    </button>
  );
};

export default LoginButton;
