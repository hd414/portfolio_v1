import React, { useEffect, useState } from 'react';
import './about.css';
import a1 from '../../assets/letterh.jpg';
import Card from '../../components/card/card.component';
import CardList from '../../components/card/cardlist.component';

import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_WEB from "../../assets/svg/website.svg";
import L_MSG from "../../assets/svg/message.svg";
import { Link, useHistory } from 'react-router-dom';
import SlideAnimation from '../../components/SlideAnimation/slideAnimation';
import '../styles.css';



const About = () => {
  const [darkClass, setdarkClass] = useState('dark');

  useEffect(() => {
    window.setTimeout(() => {
      setdarkClass('');
    }, 1000)
  }, [])

  const history = useHistory();
  return (
    <>
      <SlideAnimation />
      <div className="about-styles" className={darkClass}>

        <h1 style={{ color: "#ccd6f6", paddingTop: '2rem', paddingLeft: '4rem' }}>About Me</h1>
        <div className="about-component">
          <div className="right">
            <Card imgUrl={a1} title={""} content={"Me"} />
          </div>
          <div className="left">
            Hi there! I am Himanshu Dodrajka
            <br /><br />A passionate programmer and a developer.
            I am a <span style={{ color: "#64ffda" }}>Full Stack Web Developer</span> . My Web development stack is React.js, Redux, Express.js, Node.js, PostgreSQL ,Mongodb.
            <br />
            <br />
            Currently A 3rd year engineering student . Pursuing my B.tech in Computer Engineering from <span style={{ color: "#64ffda" }}>SVNIT Surat</span> .
            <br />
            My goal is to Make <span style={{ color: "#64ffda" }}>amazing Web application</span> which can provide the best level of <span style={{ color: "#64ffda" }}>quality and service</span> to users.
            <br />

            <br />I love <span style={{ color: "#64ffda" }}>learning</span> about new technologies, what problems are they <span style={{ color: "#64ffda" }}>solving</span> and How can I use them to build better and scalable products.
            <br /> <br />

          </div>

        </div>
        <div className="svg-about-div">
          <img src={L_REACT} alt="javascript" className="about-svg" />
          <img src={L_HTML5} alt="javascript" className="about-svg" />
          <img src={L_CSS3} alt="javascript" className="about-svg" />
          <img src={L_JAVASCRIPT} alt="javascript" className="about-svg" />
          <img src={L_WEB} alt="javascript" className="about-svg" />
        </div>

        {/* <div className="intersets">
        <h1 style={{ color: "#ccd6f6", margin: "40px" }}>My Intersets</h1>
        <CardList />
      </div> */}


        <div onClick={() => { history.push("/contact") }} className="contact-button" id="button-7">
          <div id="dub-arrow">
            <img src={L_MSG} alt="message" />
          </div>
          <Link to="/contact">Contact Me</Link>
          {/* <a href="#">Contact Me</a> */}
        </div>

      </div>
    </>
  )
}

export default About
