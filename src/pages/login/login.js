import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header/header";
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCode, setAdminCode] = useState(''); // 관리자 코드 추가
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // 관리자 코드가 입력되면 isAdmin 상태를 true로 변경
    if (adminCode === 'admin123') {
      setIsAdmin(true);
    }

    // 로그인 로직 구현: 사용자 입력 정보를 서버로 전송하고 로그인 여부 판단
    // 서버로 전송할 데이터에 isAdmin 값을 포함시킴
    const loginData = { email, password, isAdmin };
    // ... 서버와의 통신 및 로그인 처리
  };

  return (
    <div className="LoginPage">
      <Header navigate={navigate} />
      <div className="JoinForm">
        <h1>로그인</h1>
        <form onSubmit={handleLogin}>
          <div className="InputGroup">
            <label className="Label">e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="InputGroup">
            <label className="Label">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isAdmin && ( // 관리자 체크박스가 선택된 경우에만 관리자 코드 입력칸 표시
            <div className="InputGroup">
              <label className="Label">관리자 코드</label>
              <input
                type="password"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
              />
            </div>
          )}
          <div className="CheckboxGroup">
            <label className="CheckboxLabel">
              <input
                className="Checkbox"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              관리자 로그인
            </label>
          </div>
          <button className="Button" type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;