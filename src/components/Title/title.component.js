import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import './title.styles.css';
export const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
 
  margin-top: -125px;
  text-align: center;
  color:white;
  strong {
    font-size: 1.25em;
  }
  div {
    color: #8892b0;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 60px;
      
    }
    @media only screen and (max-width: 600px) {
  .main{
    font-size: 30px;
  }
}
    .sub {
      font-size: 40px;
      letter-spacing: 2px;
      font-weight:800;
    }
    @media only screen and (max-width: 600px) {
  .sub{
    font-size: 15px;
      letter-spacing: 2px;
      font-weight:500;
  }
    
  }
`;


const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong style={{ color: "#ccd6f6" }}>Himanshu Dodrajka</strong>
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
    <div className="get-in-touch">
      <a className="get-in-touch-link" href="mailto:himanshuagarwal9856@gmail.com@gmail.com">Get in Touch</a>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;