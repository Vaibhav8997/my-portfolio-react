import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaJava, FaDocker, FaLinux, FaWindows, FaApple, FaGitAlt, FaDatabase
} from "react-icons/fa";
import { SiGo, SiMongodb, SiKubernetes } from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
        { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
        { name: "ReactJS", icon: <FaReact color="#61dbfb" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Go", icon: <SiGo color="#00ADD8" /> },
        { name: "Java", icon: <FaJava color="#f89820" /> },
        { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: <FaDatabase color="#00758f" /> },
        { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
      ],
    },
    {
      title: "DevOps / Tools",
      items: [
        { name: "Docker", icon: <FaDocker color="#0db7ed" /> },
        { name: "Kubernetes", icon: <SiKubernetes color="#326ce5" /> },
        { name: "Git & GitHub", icon: <FaGitAlt color="#f34f29" /> },
      ],
    },
    {
      title: "Operating System",
      items: [
        { name: "Linux", icon: <FaLinux color="#fcc624" /> },
        { name: "Windows", icon: <FaWindows color="#0078d6" /> },
        { name: "MacOS", icon: <FaApple color="#999999" /> },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((skill, i) => (
                <li key={i} className="skill-item">
                  <span className="icon">{skill.icon}</span>
                  <span className="text">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
