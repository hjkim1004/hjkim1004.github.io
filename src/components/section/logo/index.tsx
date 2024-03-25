import React from 'react';
import {Link} from "react-router-dom";
import config from "@Data/config";
import LogoSrc from "@Images/star-bubble.png"

const Logo = () => {
    return (
        <div className="logo" translate="no">
            <Link to={"/"} title={"메인페이지 이동"}>
                <img src={LogoSrc} alt="메인 로고 이미지" title={"메인 로고 이미지"}/>
                <div className="title">{config.logoText}</div>
            </Link>
        </div>
    );
};

export default Logo;
