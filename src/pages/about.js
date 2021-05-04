import { Link } from 'gatsby';
import React from 'react';

const About = (props) => (
    <div>
        <h1>About Me</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ante ut mi interdum auctor. Suspendisse condimentum consectetur pharetra. Suspendisse vitae luctus dui. Mauris dictum metus sed blandit tempus. Quisque odio diam, eleifend sit amet gravida sed, imperdiet vel odio. Sed laoreet varius tortor et faucibus. Quisque at nunc sollicitudin nulla aliquet rhoncus. Quisque tincidunt justo hendrerit metus pretium, sit amet rhoncus nunc pellentesque. Integer interdum viverra nisi sit amet lobortis. Maecenas placerat neque erat, nec suscipit est egestas feugiat. Nunc euismod ac libero id auctor. Quisque convallis sem sit amet ullamcorper tristique.
        </p>
        <Link to="/contact">Contact Me</Link>
    </div>
);

export default About;