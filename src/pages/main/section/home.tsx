import React from "react";
import {CgMouse} from "react-icons/cg";
import config from "@Data/config";
import {SyncLoader} from "react-spinners";

const HomeSection = () => {
    return (
        <section id="s_home" className="section">
            <div className="section-bg"></div>
            <h1 className="section-title" data-aos="fade-up" data-aos-delay={100}>
                {config.titleText}
            </h1>
            <div className="scroll-down" data-aos="fade-up" data-aos-offset={0}>
                <a href={"#section_profile"}>
                    <div className="icon"><CgMouse/></div>
                    <div className="title">Explore More</div>
                </a>
            </div>
        </section>
    );
};


export default HomeSection;
