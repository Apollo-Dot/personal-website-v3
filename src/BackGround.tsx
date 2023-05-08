import { useEffect } from 'preact/hooks';
import * as THREE from 'three'

export function BG() {

    function setup(canvas: HTMLCanvasElement) {
        // Setup
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
                premultipliedAlpha: false,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        camera.position.setX(-3);

        renderer.render(scene, camera);
    }

    useEffect(() => {

        const canvasBG = document.getElementById("bg")

        setup(canvasBG)
    })

    return (
        <>
            <canvas class="-z-50" id="bg" />
        </>
    )
}