import React from 'react';
import {links} from "@Data/link";
import Logo from "@Components/section/logo";

const Footer = () => {
    return (
        <footer className="footer section">
            <Logo />
            <div>
                Copyright 2024. Heejeong Kim. All rights reserved.
            </div>

            <ul className="footer-link">
                {links.map(e => {
                    return (
                        <li key={"footer-link-" + e.id}>
                            <a href={e.link} target="_blank">{e.icon}</a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
