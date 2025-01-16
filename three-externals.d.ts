declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Object3D, TOUCH, Vector3 } from 'three';

    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement?: HTMLElement);

        object: Camera;
        domElement: HTMLElement | Document;

        // API
        enabled: boolean;
        target: Vector3;

        // deprecated
        center: Vector3;

        minDistance: number;
        maxDistance: number;

        minZoom: number;
        maxZoom: number;

        minPolarAngle: number;
        maxPolarAngle: number;

        minAzimuthAngle: number;
        maxAzimuthAngle: number;

        enableDamping: boolean;
        dampingFactor: number;

        enableZoom: boolean;
        zoomSpeed: number;

        enableRotate: boolean;
        rotateSpeed: number;

        enablePan: boolean;
        panSpeed: number;
        screenSpacePanning: boolean;
        keyPanSpeed: number;

        autoRotate: boolean;
        autoRotateSpeed: number;

        enableKeys: boolean;
        keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number };
        mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
        touches: { ONE: TOUCH; TWO: TOUCH };

        target0: Vector3;
        position0: Vector3;
        zoom0: number;

        saveState(): void;

        update(): boolean;

        reset(): void;

        dispose(): void;

        getPolarAngle(): number;

        getAzimuthalAngle(): number;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void): void;

        hasEventListener(type: string, listener: (event: any) => void): boolean;

        removeEventListener(type: string, listener: (event: any) => void): void;

        dispatchEvent(event: { type: string; target: any }): void;
    }
}

declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader, LoadingManager, Group, AnimationClip, Camera } from 'three';

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (gltf: GLTF) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        parse(
            data: ArrayBuffer | string,
            path: string,
            onLoad: (gltf: GLTF) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
    }

    export interface GLTF {
        animations: AnimationClip[];
        scene: Group;
        scenes: Group[];
        cameras: Camera[];
        asset: object;
    }
}