import React, {lazy, Suspense} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@Store/index";
import {mainLoaded} from "@Store/slice/loading";
import {SyncLoader} from "react-spinners";

const HomeSection = () => {
    const loading = useSelector((state: RootState) => state.loading.main);
    const dispatch = useDispatch();

    const BabylonComponent = lazy(() => {
        return import('@Components/section/babylon').then(module => ({
            default: () => (
                <module.default
                    rootUrl={"models/night_sky/"}
                    sceneFileName={"scene.gltf"}
                    onMeshLoaded={() => {
                        return dispatch(mainLoaded());
                    }}
                />
            )
        }));
    });

    return (
        <section id="section_home" className="section">
            <div className="section-bg">
                <Suspense>
                    <BabylonComponent/>
                </Suspense>
            </div>
            <h1 className="section-title" data-aos="fade-up" data-aos-delay={100}>
                Explore Space
            </h1>
            <div className={loading ? "loading" : 'loading hide'}>
                <div>Babylon 로딩중</div>
                <SyncLoader
                    margin={5}
                    size={10}
                    color={"rgba(255,255,255,0.8)"}
                />
            </div>
        </section>
    );
};

export default HomeSection;
