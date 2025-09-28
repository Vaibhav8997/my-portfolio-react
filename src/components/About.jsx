import React from "react";
import "./About.css";
function About() {
    return (
            <section id="about" className="about">
      <div className="about-container">
        
        {/* Left: Profile Image */}
        <div className="about-image">
          <img
            src="https://via.placeholder.com/300"
            alt="profile"
          />
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Vaibhav Singh, a developer who enjoys building clean, performant, and user-friendly products. I work with HTML, CSS, JavaScript, React, and also backend with Go and Java. I love learning, shipping features, and collaborating on impactful projects.
          </p>

          {/* Skills */}
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          {/* Button */}
          <a href="#" className="btn">GitHub Profile</a>
        </div>
      </div>
    </section>
  );
};

export default About;