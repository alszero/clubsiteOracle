import "./home.css";
import Header from "../../components/header/header";
import {useNavigate } from "react-router-dom";
import BackgroundImg from '../../assests/bg.png';
import { useEffect } from "react";

const Home = ()=> {
    const navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate}/>
            <div>
                <img className="bg" src={BackgroundImg} alt="bg" />
                <div className="title">
                    <p className="first">USER에서 MAKER로 거듭나고자 하는</p>
                    <p className="first" style={{marginTop : '1%'}}>당신을 위한 최고의 선택, APP&ME</p>
                    <hr />
                    <p className="sub">앱앤미와 관련되어 궁금한 점이 있다면</p>
                    <p className="sub">에스크와 인스타를 통해 질문해주세요!</p>
                    <p className="date">03.15-03.19</p>
                    <div onClick={()=>{navigate("/apply")}} className="apply" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                        지원하기
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;