import { useNavigate } from 'react-router-dom';

const LoginButton = props => {
  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://10.58.6.117:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        // email: props.valueId,
        email: props.valueId,
        password: props.valuePw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));

    navigate('/Main-Kyle');
  };

  return (
    <button
      id="loginBtn"
      type="button"
      // disabled
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
