import React from "react";

import Typewriter from "@Components/section/typewriter";
import {CgMouse} from "react-icons/cg";
import Babylon from "@Components/section/babylon";
import config from "@Data/config";

const HomeSection = () => {
    return (
        <section id="section_home" className="section">
            <div className="section-bg">
                <Babylon
                    rootUrl={"models/night_sky/"}
                    sceneFileName={"scene.gltf"}/>
            </div>
            <h1 className="section-title" data-aos="fade-up" data-aos-delay={100}>
                <Typewriter text={config.titleText} delay={100}/>
            </h1>
            <div className="scroll-down" data-aos="fade-up" data-aos-offset={0}>
                <a href={"#section_profile"}>
                    <div className="icon"><CgMouse/></div>
                    <div className="title">Scroll Down</div>
                </a>
            </div>
        </section>
    );
};


export default HomeSection;
