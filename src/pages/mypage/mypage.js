import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 불러오기
import Header from "../../components/header/header";

const MyPage = () => {
  // 여기서 사용자 로그인 여부를 확인할 수 있는 로직을 구현합니다.
  const isLoggedIn = false; // 예시로 로그인 여부를 false로 설정

  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div>
        <Header navigate={navigate} />
        <div className="MyPage">
        {!isLoggedIn ? (
            <div>
            <p>회원가입 또는 로그인을 진행하세요.</p>
            <button onClick={() => navigate('/join')}>회원가입</button>
            <button onClick={() => navigate('/login')}>로그인</button>
            </div>
        ) : (
            <p>회원 정보를 보여주는 내용</p>
        )}
        </div>
    </div>
  );
};

export default MyPage;
