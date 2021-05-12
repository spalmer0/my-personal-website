import React from 'react';
import { Link } from 'gatsby';

const Resume = (props) => (
    <div>
        <h1>Resume</h1>
        <p>
            I am a Software engineer that 
            has spent the past 15 years 
            in IT project and product 
            management.  Adept in a variety 
            of programming languages, I 
            have the ability to solve 
            complex problems, and deliver 
            thoughtful solutions to meet 
            customer needs.
        </p>
        <Link to="/portfolio">Some of my Projects</Link>
        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>PostgreSQL</li>
            <li>SQL</li>
        </ul>
        <h3>Frameworks</h3>
        <ul>
            <li>Django</li>
            <li>Express</li>
        </ul>


        
    </div>
);

export default Resume;