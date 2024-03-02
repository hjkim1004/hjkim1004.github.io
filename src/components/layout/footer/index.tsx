import React from 'react';
import {links} from "@Data/link";

const Footer = () => {
    return (
        <footer className="footer section">
            <ul className="footer-link">
                {links.map(e => {
                    return (
                        <li><a href={e.link} target="_blank">{e.icon}</a></li>
                    );
                })}
            </ul>
            <div>
                Copyright 2024. Heejeong Kim. All rights reserved.
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;
