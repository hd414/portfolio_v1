import React from 'react'
import ProjectCard from '../../components/Project-card/project.card.component';
import './projects.css';
import { ProjectData } from './project.data';

const Projects = () => {
    return (
        <div>
            <h1 className="project-heading">Open Source Projects</h1>

            <div className="projects-cardlist">
                {
                    ProjectData.map(({ id, ...other }) => (
                        <ProjectCard key={id} {...other} />
                    ))
                }

            </div>

            <div onClick={() => { history.push("/contact") }} class="contact-button" id="button-7">
                <div id="dub-arrow">
                    <img src={L_MSG} alt="message" />
                </div>
                <a target="_blank" href="https://github.com/hd414">More Projects</a>
            </div>


        </div>
    )
}

export default Projects
