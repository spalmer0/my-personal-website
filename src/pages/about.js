import { Link } from 'gatsby';
import React from 'react';

const About = (props) => (
    <div>
        <h1>About Me</h1>
        <p>
            I am a software engineer that has spent the past 15 years in IT project and product management.  Adept in a variety of programming languages, I have the ability to solve complex problems, and deliver thoughtful solutions to meet customer needs.
        </p>
        <Link to="/contact">Contact Me</Link>
    </div>
);

export default About;