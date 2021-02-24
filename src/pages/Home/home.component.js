import React from 'react';
import './home.styles.css';
import TitleMessage from "../../components/Title/title.component";
const Home = () => {
    return (
        <div className="home-page">
            <div className="effect-wrap">
                <div className="effect effect1">
                </div>
                <div className="effect effect2">
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                </div>
                <div className="effect effect3"></div>
                <div className="effect effect4"></div>
                <div className="effect effect5">
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                </div>
                <div className="effect effect6"></div>
                <div className="effect effect7"></div>
            </div>
            <TitleMessage />
        </div>
    )
}

export default Home;


