import React from "react";
import './Hero.css';

function Hero() {
    return(
        <section className="hero">
            <h1>Hi, I'm Vaibhav Singh</h1>
            <p>Full-stack Developer • Building with Go & diving deeper into Concurrency</p>
            <div className="buttons">
                <a href="#projects" className="btn">View Projects</a>
                <a href="#resume" className="btn">My Resume</a>
            </div>
        </section>
    );
}

export default Hero;