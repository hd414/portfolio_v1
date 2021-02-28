import React from 'react';
import './project.card.styles.css';

const ProjectCard = ({ name, description, tech, github, website, image }) => {
    return (
        <div>

            <a style={{ textDecoration: "none" }} className="card1" href={website ? website : github}>
                <h3 className="project-name">{name}</h3>
                <p className="small project-desc">{description}</p>
                <p className="">{tech.map((tech) => (
                    <img className="tech-logos" src={tech} />
                ))}</p>
                <div>
                    <div>
                        <a className="icon" target="_blank" href={github}>
                            <i className="fab fa-github">
                            </i>
                        </a>

                        {
                            website ? (<a className="icon" target="_blank" href={website}>
                                <i className="fas fa-link">
                                </i>
                            </a>) :
                                <spna></spna>
                        }
                    </div>
                </div>
                <div className="layout"></div>
            </a>




        </div >
    );
}

export default ProjectCard;
