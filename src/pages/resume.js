import React from 'react';
import { Link } from 'gatsby';
import jmu from "../images/jmu.png";
import popm from "../images/popm.png";
import uva from "../images/uva.png";
import itil from "../images/itil.png";
import ga from "../images/ga.png";
import pmp from "../images/pmp.png";

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
        <h3>Tools and Libraries</h3>
        <ul>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>Materialize</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>OAuth</li>
            <li>React</li>
            <li>REST APIs</li>
        </ul>
        <h3>Other</h3>
        <ul>
            <li>Agile/SAFe</li>
            <li>Product Management</li>
            <li>Project Management</li>
        </ul>
        <h2>Experience</h2>
        <p><strong>Federal Reserve Bank of Richmond</strong></p>
        <p>September 2008 - Present</p>
        <p><em>Business Advisor</em></p>
        <p>
            Spent nearly 13 years in a variety of project 
            and product management roles across Enterprise 
            Projects, Information Security, Finance, and 
            Product Management.
        </p>
        <ul>
            <li>Product Owner for agile squad responsible for web presence and user experience.</li>
            <li>Created a product menu containing marketing web pages for over 60 IT products, serving an app dev community of over 2000 users.</li>
            <li>Leveraged analytics to enable product teams to continually improve user experience</li>
            <li>Responsible for annual budget submission of approximately 200 IT projects spanning 12 Federal Reserve Banks, 15 business lines, and Federal Reserve IT Infrastructure</li>
            <li>Partnered with external consultant to deploy industry-accepted skills assessment to 2000 employees</li>
            <li>Led consulting engagement that assessed current state of Federal Reserve operations and recommended changes resulting in strategic organizational transformation and millions in identified cost savings.</li>
            <li>Led effort to replace cost accounting system and implement Tiers of Service for customer pricing based on industry-accepted Technology Business Model.</li>
        </ul>
	    <p><strong>Nortel Government Solutions</strong></p>
        <p>August 2005 - September 2008</p>
        <p><em>Systems Engineer</em></p>
        <p>Spent three years in government contracting roles including background investigation and data analysis.</p>
        <ul>
            <li>Managed a mobile network solution to facilitate hiring of TSA employees</li>
            <li>Validated FBI classification rating of biometric information</li>
            <li>Produced reporting for patent filing system helpdesk</li>
        </ul> 


        <h2>Education</h2>
        <p><strong>General Assembly</strong></p>
        <img src={ga} alt="General Assembly" />
        <ul>
            <li>Software Engineering Immersive Remote Program</li>
            <li>September 2020 - March 2021</li>
        </ul>
        <p><strong>University of Virginia</strong></p>
        <img src={uva} alt="University of Virginia" />
        <ul>
            <li>Graduate Certificate, Cybersecurity Management</li>
            <li>September 2014 - December 2015</li>
        </ul>
        <p><strong>James Madison University</strong></p>
        <img src={jmu} alt="James Madison University" />
        <ul>
            <li>Bachelor of Business Administration, Computer Information Systems</li>
            <li>August 2001 - May 2005</li>
        </ul>
        <h3>Certifications</h3>
        <ul>
            <li>SAFe Product Owner/Product Manager</li>
            <img src={popm} alt="SAFe Product Owner/Product Manager" />
            <li>Project Management Professional (PMP)</li>
            <img src={pmp} alt="Project Management Professional" />
            <li>ITIL</li>
            <img src={itil} alt="ITILv4" />
        </ul>



        
    </div>
);

export default Resume;