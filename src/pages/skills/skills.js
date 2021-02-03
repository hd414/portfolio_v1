import React from 'react'
import './skills.css';
import {skills} from './skills.data';

const Skills = () => {
    return (
        <div className="title-skills">
             <h1 style={{color:"#8892b0"}}>Skills</h1>
           <div > 
               <br/>
               <br/>
                <div >
                    <h5 style={{color:'#e6f1ff'}}>Frontend</h5>
                       <ul className="frontend">
                       {skills.frontend.map((skill, index) => (
                    <li key={index}>
                      <a  href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/>
                         <span className="title-logo">{skill.skillName}</span>
                      </a>
                    </li>
                       ))}
                       </ul>
                </div>
                <br/>
                <div >
                    <h5 style={{color:'#e6f1ff'}}>Backend</h5>
                    <ul className="backend">
                       {skills.backend.map((skill, index) => (
                    <li key={index}>
                      <a  href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/>
                         <span className="title-logo">{skill.skillName}</span>
                      </a>
                    </li>
                       ))}
                       </ul>
                </div>

           </div>
           
           <br/>
             <div>
                 <h5 style={{color:"#ccd6f6"}}>Hosting Platforms</h5>
                 <ul className="hosting">
                       {skills.hostingPlatforms.map((skill, index) => (
                    <li key={index}>
                      <a  href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/>
                         <span className="title-logo">{skill.skillName}</span>
                      </a>
                    </li>
                       ))}
                       </ul>
             </div>
             <br/>
             <div>
                 <h5 style={{color:"#ccd6f6"}}>Tools</h5>
                 <ul className="tools">
                       {skills.databases.map((skill, index) => (
                    <li key={index}>
                      <a  href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/>
                         <span className="title-logo">{skill.skillName}</span>
                      </a>
                    </li>
                       ))}
                       {skills.versionControl.map((skill, index) => (
                    <li key={index}>
                      <a  href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/>
                         <span className="title-logo">{skill.skillName}</span>
                      </a>
                    </li>
                       ))}
                       </ul>
             </div>


             <br/>
           <div>
               <h5 style={{color:"#ccd6f6"}}>Programming Languages</h5>
               <ul className="programming">
                       {skills.programmingLanguages.map((skill, index) => (
                    <li key={index}>
                      <div className="programlan">
                      <a  href={skill.link} target="_blank" rel="noopener noreferrer" className=" text-decoration-none logo-name">
                        <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/>
                         <span className="title-logo">{skill.skillName}</span>
                      </a>
                      
                      </div>
                    </li>
                       ))}
                       </ul>
           </div>
        </div>
    )
}

export default Skills
