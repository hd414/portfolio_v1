import React from "react";
import Typewriter from "typewriter-effect";

import './title.styles.css';
import logo from '../../assets/letterh.svg'

import { MyTitleMessage } from './title.styles';

const TitleMessage = () => (
  <div>
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main">
            Hi, I am
            <br />
            <span>
              <strong className="name">Himanshu Dodrajka</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter

              options={{
                strings: ["Web Developer", "Coder", "Learner"],
                autoStart: true,
                loop: true,
                delay: 100,
                pauseFor: 500
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="get-in-touch btn draw-border">
        <a className="get-in-touch-link" href="mailto:himanshuagarwal9856@gmail.com@gmail.com">Get in Touch</a>
      </div> */}
      <div className="wrap">
        <a className="get-in-touch-link" href="mailto:himanshuagarwal9856@gmail.com@gmail.com"><button className="button get-in-touch-link">Get in Touch</button></a>
      </div>
    </MyTitleMessage>
    <div className="name-logo"><img src={logo} /></div>
  </div>
);

export default TitleMessage;