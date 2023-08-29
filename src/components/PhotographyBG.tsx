import { useEffect } from 'preact/hooks';

import * as THREE from 'three'

import { PDBLoader } from 'three/addons/loaders/PDBLoader.js';


const pdbLoader = new PDBLoader();

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
const offset = new THREE.Vector3();

export function PhotographyBG() {

    useEffect(() => {
        const canvasBG: any = document.getElementById("bg")

        setup(canvasBG)
        animate();

        document.body.onscroll = moveCamera;
        moveCamera();
    })

    return (
        <>
            <canvas class="-z-50 fixed top-0 left-0" id="bg" />
        </>
    )
}

function setup(canvas: HTMLCanvasElement) {
    // Setup
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);
    camera.rotation.y = 180

    renderer.render(scene, camera);

    // Background
    const spaceTexture = new THREE.CubeTextureLoader()
        .setPath('/skybox/')
        .load([
            'right.webp', 'left.webp',
            'top.webp', 'bottom.webp',
            'front.webp', 'back.webp'
        ])
    spaceTexture.colorSpace = THREE.SRGBColorSpace
    scene.background = spaceTexture;


    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(- 1, - 1, 1);
    scene.add(light2);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;

    camera.rotation.x = t * 0.0003;
}

function animate() {

    requestAnimationFrame(animate);

    //const time = Date.now() * 0.0004;

    render();

}

function render() {

    renderer.render(scene, camera);

}