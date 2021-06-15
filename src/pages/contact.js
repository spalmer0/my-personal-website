import { Link } from 'gatsby';
import React from 'react';
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import styled from 'styled-components';

const StyledPage = styled.main`
    img {
        height: 30px;
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: center;

    }

`;


const Contact = (props) => (
    <StyledPage>
        <div className="contact">
            <h1>Contact Me</h1>
            <p>Richmond, VA</p>
            <a href="mailto: palmersf@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="palmersf@gmail.com" />
            </a>
            <a href="https://github.com/spalmer0" target="_blank" rel="noreferrer">
                <img src={github} alt="github.com/spalmer0" />
            </a>
            <a href="https://www.linkedin.com/in/stuartfpalmer" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin.com/in/stuartfpalmer" />
            </a>
            <Link to="/about">About Me</Link>

        </div>
    </StyledPage>
);

export default Contact;