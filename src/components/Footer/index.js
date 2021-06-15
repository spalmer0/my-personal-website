import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Footer.module.scss';
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png";
import gmail from "../../images/gmail.png";


const Footer = (props) => (
    
    
    <footer className={styles.Footer}>
        <div className={styles.imgContainer}>
            <a href="mailto: palmersf@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="palmersf@gmail.com" />
            </a>
            <a href="https://github.com/spalmer0" target="_blank" rel="noreferrer">
                <img src={github} alt="github.com/spalmer0" />
            </a>
            <a href="https://www.linkedin.com/in/stuartfpalmer" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin.com/in/stuartfpalmer" />
            </a>
        </div>

        <Link className={styles.about} to="/about">About Me</Link>
        
        <p className={styles.copy}>
            Copyright &copy; All Rights Reserved
            {' '}{new Date().getFullYear()} Stuart Palmer
        </p>
    </footer>
);

export default Footer;