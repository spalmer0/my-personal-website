import React from 'react';
import statsyoLOGO from "../images/statsyoLOGO.png";
import LightTheLamp from "../images/LightTheLamp.png";
import fairways from "../images/fairways.png";
import trivia from "../images/trivia.png";


const Portfolio = (props) => (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <p>
            Here's what I've been up to.
        </p>
        <p>Stats Yo!</p>
        <img src={statsyoLOGO} alt="Stats Yo!" />
        <p>Light the Lamp</p>
        <img src={LightTheLamp} alt="Light The Lamp" />
        <p>Fairways and Greens</p>
        <img src={fairways} alt="Fairways and Greens" />
        <p>Trivia Night</p>
        <img src={trivia} alt="Trivia Night" />
        
    </div>
);

export default Portfolio;