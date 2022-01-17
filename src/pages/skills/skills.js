import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/progressBar/progress_bar.component';
import SlideAnimation from '../../components/SlideAnimation/slideAnimation';
import './skills.css';
import { skills } from './skills.data';
import '../styles.css';

const Skills = () => {

  const [darkClass, setdarkClass] = useState('dark');

  useEffect(() => {
    window.setTimeout(() => {
      setdarkClass('');
    }, 1000)
  }, [])

  return (
    <div>
      <SlideAnimation />
      <div className="title-skills" className={darkClass}>

        <div className="Proficiency">
          <h1 style={{ color: "#8892b0", marginLeft: "3vw" }}>Proficiency</h1>
          <ProgressBar title={"C++"} value={"90"} />
          <ProgressBar title={"REACT"} value={"60"} />
          <ProgressBar title={"JavaSCript"} value={"70"} />
          <ProgressBar title={"HTML"} value={"90"} />
          <ProgressBar title={"CSS/SCSS"} value={"70"} />
        </div>


        <h1 style={{ color: "#8892b0", marginLeft: "3vw" }}>Technical skills</h1>
        <div >
          <br />
          <br />


          <div >
            <h5 style={{ color: '#e6f1ff' }}>Frontend</h5>
            <ul className="frontend">
              {skills.frontend.map((skill, index) => (
                <li key={index}>
                  <a href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                    <span className="title-logo">{skill.skillName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <div >
            <h5 style={{ color: '#e6f1ff' }}>Backend</h5>
            <ul className="backend">
              {skills.backend.map((skill, index) => (
                <li key={index}>
                  <a href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                    <span className="title-logo">{skill.skillName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <br />
        <div>
          <h5 style={{ color: "#ccd6f6" }}>Hosting Platforms</h5>
          <ul className="hosting">
            {skills.hostingPlatforms.map((skill, index) => (
              <li key={index}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                  <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                  <span className="title-logo">{skill.skillName}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div>
          <h5 style={{ color: "#ccd6f6" }}>Tools</h5>
          <ul className="tools">
            {skills.databases.map((skill, index) => (
              <li key={index}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                  <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                  <span className="title-logo">{skill.skillName}</span>
                </a>
              </li>
            ))}
            {skills.versionControl.map((skill, index) => (
              <li key={index}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                  <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                  <span className="title-logo">{skill.skillName}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>


        <br />
        <div>
          <h5 style={{ color: "#ccd6f6" }}>Programming Languages</h5>
          <ul className="programming">
            {skills.programmingLanguages.map((skill, index) => (
              <li key={index}>
                <div className="programlan">
                  <a href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />
                    <span className="title-logo">{skill.skillName}</span>
                  </a>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
