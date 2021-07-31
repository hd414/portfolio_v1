import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/Project-card/project.card.component';
import './projects.css';
import { ProjectData } from './project.data';
import L_MSG from "../../assets/svg/github-logo.svg";
import SlideAnimation from '../../components/SlideAnimation/slideAnimation';
import '../styles.css';

const Projects = () => {

    const [darkClass, setdarkClass] = useState('dark');

    useEffect(() => {
        window.setTimeout(() => {
            setdarkClass('');
        }, 1000)
    }, [])

    return (
        <>
            <SlideAnimation />
            <div className={darkClass}>
                <h1 className="project-heading">Open Source Projects</h1>

                <div className="projects-cardlist">
                    {
                        ProjectData.map(({ id, ...other }) => (
                            <ProjectCard key={id} {...other} />
                        ))
                    }

                </div>
                <a target="_blank" href="https://github.com/hd414">
                    <div className="contact-button" id="button-7">
                        <div id="dub-arrow">
                            <img src={L_MSG} alt="message" />
                        </div>
                        <a target="_blank" href="https://github.com/hd414">More Projects</a>
                    </div>
                </a>


            </div>
        </>
    )
}

export default Projects
