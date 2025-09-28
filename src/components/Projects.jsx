import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website",
        tech: ["ReactJS", "HTML5", "CSS"],
        live: "https://vaibhav7781.netlify.app",
        github: "#",
    },

    {
        title: "Chat App",
        description: "Real-time chat app built with GO (WebSockets) & React.",
        tech: ["Go", "React", "Docker"],
        live: "#",
        github: "https://github.com/Vaibhav8997/Chat-Application-in-Go-with-ReactJS",
    },

    {
        title: "E-Commerce",
        description: "Clothing storefront with React frontend & Go backend, REST APIs, and JWT auth.",
        tech: ["Go", "Rest APIs", "React", "JWT auth"],
        live: "#",
        github: "https://github.com/Vaibhav8997",
    },

    {
        title: "Playing Cards",
        description: "A simple project written in Golang to simulate a deck of playing cards.",
        tech: ["GO"],
        live: "#",
        github: "https://github.com/Vaibhav8997/playing_cards",
    },
];

const Projects = () => {
    return(
        <section className="projects-section" id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {
                    projects.map((project, index) =>(
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {
                                    project.tech.map((tech, i) => (
                                        <span key={i} className="tech-item">{tech}</span>
                                    ))
                                }
                            </div>
                            <div className="project-links">
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}

                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;