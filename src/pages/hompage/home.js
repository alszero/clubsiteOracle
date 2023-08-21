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
            </div>
        </div>
    );
};

export default Home;