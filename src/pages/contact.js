import { Link } from 'gatsby';
import React from 'react';
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

const Contact = (props) => (
    <div>
        <h1>Contact Me</h1>
        <p>Richmond, VA</p>
        <p><a href="mailto: palmersf@gmail.com" target="_blank" rel="noreferrer">palmersf@gmail.com</a></p>
        <a href="https://github.com/spalmer0" target="_blank" rel="noreferrer">
            <img 
                src={github}
                alt="github.com/spalmer0"
                style={{ height: 100, width: 100 }}    
            />
        </a>
        <a href="https://www.linkedin.com/in/stuartfpalmer" target="_blank" rel="noreferrer">
            <img 
                src={linkedin}
                alt="linkedin.com/in/stuartfpalmer"
                style={{ height: 100, width: 100}}
            />
        </a>
        <Link to="/about">About Me</Link>
    </div>
);

export default Contact;