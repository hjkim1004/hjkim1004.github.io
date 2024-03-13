import React from 'react';
import {links} from "@Data/link";
import Logo from "@Images/star-bubble.png";
import config from "@Data/config";

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="logo footer-logo">
                <img src={Logo} alt="메인 로고 이미지" title="메인 로고 이미지"/>
                <div className="title">{config.logoText}</div>
            </div>
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
