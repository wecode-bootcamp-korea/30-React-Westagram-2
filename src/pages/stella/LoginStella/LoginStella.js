import React, { useState } from 'react';
import './LoginStella.scss';

function LoginStella() {
  let [loginId, setLoginId] = useState('');
  let [loginPw, setLoginPw] = useState('');
  //[변수 , 함수]
  function handleIdInput(event) {
    setLoginId(event.target.value);
  }
  function handlePwInput(event) {
    setLoginPw(event.target.value);
  }
  return (
    <div className="login">
      <div className="wrap">
        <h1>Westagram</h1>
        <form>
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button id="btn" className="disabled">
            로그인
          </button>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </form>
      </div>
    </div>
  );
}

export default LoginStella;

// const btn = document.querySelector("#btn");
// const idInput = document.querySelector("input#id");
// const passwordInput = document.querySelector("input#password");

// function onLogin(event){
//     event.preventDefault();
//     const id = document.querySelector("input#id").value;
//     const password = document.querySelector("input#password").value;
//     const string = "@";
//     if(!id || !id.includes(string)){
//         alert('ID를 다시 확인해주세요.');
//         return
//     }
//     if(!password || password.length < 5){
//         alert('Password를 확인해주세요');
//         return
//     }
//     location.href = 'main.html';
// }
// function onWrite(event){
//     const id = document.querySelector("input#id").value;
//     const password = document.querySelector("input#password").value;
//     console.log(id, password);
//     return (id && password) ? btn.classList.remove('disabled'):btn.classList.add('disabled');
// }

// idInput.addEventListener("keyup", onWrite);
// passwordInput.addEventListener("keyup",onWrite);
// btn.addEventListener("click",onLogin);
