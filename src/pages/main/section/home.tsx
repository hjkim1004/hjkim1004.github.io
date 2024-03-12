import React from "react";

import Typewriter from "@Components/section/typewriter";
import {CgMouse} from "react-icons/cg";
import Babylon from "@Components/section/babylon";
import config from "@Data/config";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/index";
import {SyncLoader} from "react-spinners";
import {mainLoaded} from "@Store/slice/loading";

const HomeSection = () => {
    const loading = useSelector((state: RootState) => state.loading.main);
    const dispatch = useDispatch();

    return (
        <section id="section_home" className="section">
            <div className="section-bg">
                <Babylon
                    rootUrl={"models/night_sky/"}
                    sceneFileName={"scene.gltf"}
                    onMeshLoaded={() => {
                        return dispatch(mainLoaded());
                    }}
                />
            </div>
            <h1 className="section-title" data-aos="fade-up" data-aos-delay={100}>
                <Typewriter text={config.titleText} delay={100}/>
            </h1>
            <div className="loading">
                <SyncLoader
                    margin={5}
                    size={10}
                    color={"rgba(255,255,255,0.8)"}
                    loading={loading}
                />
            </div>
            <div className="scroll-down" data-aos="fade-up" data-aos-offset={0}>
                <a href={"#section_intro"}>
                    <div className="icon"><CgMouse/></div>
                    <div className="title">Explore More</div>
                </a>
            </div>
        </section>
    );
};


export default HomeSection;
