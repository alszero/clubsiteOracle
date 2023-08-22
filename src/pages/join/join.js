import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/header/header";
import './join.css';

const JOIN = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAdmin && adminCode !== 'admin123') {
      alert('올바른 관리자 코드를 입력하세요.');
      return;
    }

    console.log('회원가입 정보:', { name, studentId, email, phoneNumber, isAdmin });
  };

  return (
    <div>
      <Header navigate={navigate}/>
      <div className="JoinForm">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className="InputGroup">
            <label className="Label">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="InputGroup">
            <label className="Label">학번</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>
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
            <label className="Label">전화번호</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          <div className="CheckboxGroup">
            <label className="CheckboxLabel">
              <input
                className="Checkbox"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              관리자
            </label>
            {isAdmin && (
              <input
                className="PasswordInput"
                type="password"
                placeholder="관리자 코드 입력"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                required
              />
            )}
          </div>
          <button className="Button" type="submit">회원가입</button>
        </form>
      </div>
     </div> 
  );
}

export default JOIN;
