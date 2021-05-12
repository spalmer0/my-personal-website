import { Link } from 'gatsby';
import React from 'react';

const Contact = (props) => (
    <div>
        <h1>Contact Me</h1>
        <p>Richmond, VA</p>
        <a href="palmersf@gmail.com">palmersf@gmail.com</a>
        <a href="https://github.com/spalmer0" target="_blank" rel="noreferrer">github.com/spalmer0</a>
        <a href="https://www.linkedin.com/in/stuartfpalmer" target="_blank" rel="noreferrer">LinkedIn</a>
        <Link to="/about">About Me</Link>
    </div>
);

export default Contact;