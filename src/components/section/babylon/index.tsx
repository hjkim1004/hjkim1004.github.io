import React, {useEffect, useRef} from 'react';
import {
    Color3,
    Color4,
    Engine,
    EngineOptions,
    HemisphericLight,
    Scene,
    SceneLoader,
    SceneOptions,
    UniversalCamera,
    Vector3, WorkerPool
} from "@babylonjs/core";

import "@babylonjs/loaders";
import "@babylonjs/loaders/glTF";

interface IBabylonInterface {
    rootUrl: string,
    sceneFileName: string
    engineOptions?: EngineOptions
    sceneOptions?: SceneOptions
    onSceneReady?: (scene: Scene) => {}
    onRender?: (scene: Scene) => {}
}

const Babylon = (props: IBabylonInterface) => {
    const reactCanvas = useRef(null);

    useEffect(() => {
        const {current: canvas} = reactCanvas;

        if (!canvas) return;

        const engine = new Engine(
            canvas,
            true,
            props.engineOptions,
            true
        );

        const createScene = () => {
            // 워커 사용을 위한 WorkerLoader 생성
            const scene = new Scene(engine);
            scene.clearColor = Color4.FromColor3(Color3.Black());

            const target = new Vector3(0, 0, 0);
            const camera = new UniversalCamera("Camera", target, scene);
            camera.attachControl(canvas, true);

            // Add a basic light
            new HemisphericLight("light1", new Vector3(0, 0, 0), scene);

            // Import glTF
            SceneLoader.ImportMeshAsync(
                null,
                props.rootUrl,
                props.sceneFileName,
                scene
            ).then(result => {
                const newMeshes = result.meshes
                newMeshes[0].position.y = 0;
                newMeshes[0].scaling = new Vector3(80, 80, 80);
            })
            return scene
        }

        const scene = createScene();
        if (scene.isReady()) {
            props.onSceneReady?.(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => props.onSceneReady?.(scene));
        }

        engine.runRenderLoop(() => {
            props.onRender?.(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        if (window) {
            window.addEventListener("resize", resize);
        }

        return () => {
            scene.getEngine().dispose();

            if (window) {
                window.removeEventListener("resize", resize);
            }
        };
    }, [props.sceneOptions, props.onRender, props.onSceneReady, props]);
    return (
        <canvas ref={reactCanvas} className="babylon-canvas"/>
    );
};

export default Babylon;
