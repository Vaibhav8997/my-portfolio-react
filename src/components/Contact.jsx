import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    return(
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-container">
                {/* Left side */}
                <div className="contact-info">
                    <p>Feel free to reach out to me for collaboration or just friendly hello.</p>
                    <div className="contact-buttons">
                        <a href="mailto:singhrisu2000@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button><FaEnvelope /> Email Me</button>
                        </a>

                        <a href="https://linkedin.com/in/vaibhav8997" target="_blank" rel="noopener noreferrer">
                        <button><FaLinkedin /> LinkedIn</button>
                        </a>

                        <a href="https://github.com/vaibhav8097" target="_blank" rel="noopener noreferrer">
                            <button><FaGithub /> GitHub</button>
                        </a>
                    </div>
                </div>

                {/*right side- contact form */}
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;