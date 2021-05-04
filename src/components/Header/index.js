import { Link } from 'gatsby';
import React from 'react';

const Header = (props) => (
    <header>
        <h1>Stuart Palmer</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Conact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;