import React from 'react';

const Footer = (props) => (
    <footer className={StyleSheet.Footer}>
        <p>
            Copyright &copy; All Rights Reserved
            {' '}{new Date().getFullYear()} Stuart Palmer
        </p>
    </footer>
);

export default Footer;