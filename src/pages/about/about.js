import React from "react";
import Header from "../../components/header/header";
import LogoImg from '../../assests/logo.png';
import {useNavigate } from "react-router-dom";
import './about.css';

const ABOUT = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate}/>
                <div className="margin">
                    <div className="box1">
                        <div className="about">ABOUT</div>
                        <center>
                        <hr />
                        </center>
                        <br />
                        <div className="title_contents">
                        <img className="logo" src={LogoImg} alt="logo" />
                        </div>
                    </div>
                    <div className="box2">
                        <div className="title">동아리 소개</div>
                        <br />
                        <div className="subtitle">
                        USER에서 MAKER로<br />
                        거듭나고자 하는 당신을 위한<br />
                        최고의 선택, APP&ME
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="contents">
                        <p>
                            앱앤미는 미림여자정보과학고등학교의 대표적인 전공동아리중 하나로 다양한 차세대 IT개발 흐름에 따른 기술들을 익히고 연구하며
                            실제로 서비스를 구현해서 학교 및 사회에 기여하는 동아리 입니다. 개발자와 디자이너의 협업을 통해 전공실력을 보다 더 키워나갈 수
                            있을뿐만 아니라 각종 IT관련 공모전 및 대회에 참여하며 다양한 활동을 할 수 있습니다. 또한, 동아리 담당 전공 선생님들과 함께하는
                            동아리 시간을 통해 각자의 전공과 관련된 스터디를 진행하여 전공 관련 지식들을 넓힐 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABOUT;