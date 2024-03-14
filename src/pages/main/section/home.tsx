import React from "react";
import {CgMouse} from "react-icons/cg";
import config from "@Data/config";
import {FaShuttleSpace} from "react-icons/fa6";
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";

const HomeSection = () => {
    return (
        <section id="s_home" className="section">
            <div className="section-bg"></div>
            <h1 className="section-title" data-aos="fade-up" data-aos-delay={500}>
                {config.titleText}
            </h1>
            <div className="space-to">
                <Tippy content={"Click to explore the dynamic wallpaper!"} data-aos="fade-up" data-aos-offset={0} data-aos-delay={1000}>
                    <Link to="/space" title={"explore the dynamic wallpaper!"}>
                        <div className="icon"><FaShuttleSpace/></div>
                    </Link>
                </Tippy>
            </div>
            <div className="scroll-down" data-aos="fade-up" data-aos-offset={0} data-aos-delay={1000}>
                <a href={"#s_profile"}>
                    <div className="icon"><CgMouse/></div>
                    <div className="title">Read More</div>
                </a>
            </div>
        </section>
    );
};


export default HomeSection;
