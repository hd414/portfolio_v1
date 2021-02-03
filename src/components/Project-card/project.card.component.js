import React from 'react';
import './project.card.styles.css';
import GitHub from '../../assets/img/skills/github.svg';
import Link from '../../assets/img/skills/external-link.svg';
const ProjectCard = ({ name, description, tech, github, website }) => {
    return (
        <div>

            <a style={{ textDecoration: "none" }} className="card1" href="#">
                <h3 className="project-name">{name}</h3>
                <p className="small project-desc">{description}</p>
                <p className="">{tech.map((tech) => (
                    <img className="tech-logos" src={tech} />
                ))}</p>
                <div className="go-corner" href="#">
                    <div className="go-arrow">
                        <a target="_blank" href={github}>
                            <img src={GitHub} alt="github" className="logopro" />
                        </a>

                        {
                            website ? (<a target="_blank" href={website}>
                                <img src={Link} alt="website" style={{ marginLeft: "2rem" }} className="logopro" />
                            </a>) :
                                <spna></spna>
                        }
                    </div>
                </div>
            </a>

        </div>
    );
}

export default ProjectCard;
