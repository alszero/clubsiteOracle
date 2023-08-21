import React from "react";
import './header.css';
import {useLocation} from "react-router-dom";

const Header = ({navigate}) => {
    const location = useLocation();
    return (
        <div className="container">
            <h1 onClick={ () => navigate("/")}>APP&ME</h1>
            <div className="nav-box">
                <div className={`nav-tab ${location.pathname === "/"?"active":""}`} onClick={()=>{navigate("/")}}>부원소개</div>
                <div className={`nav-tab ${location.pathname === "/apply"?"active":""}`} onClick={()=>{navigate("/apply")}}>지원하기</div>
                <div className={`nav-tab ${location.pathname === "/about"?"active":""}`} onClick={()=>{navigate("/about")}}>ABOUT</div>
                <div className={`nav-tab ${location.pathname === "/history"?"active":""}`} onClick={()=>{navigate("/history")}}>활동기록</div>
                <div className={`nav-tab ${location.pathname === "/mypage"?"active":""}`} onClick={()=>{navigate("/mypage")}}>마이페이지</div>
            </div>
        </div>
    )
}

export default Header;