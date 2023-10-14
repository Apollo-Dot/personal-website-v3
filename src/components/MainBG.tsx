import { useEffect } from 'preact/hooks';

import * as THREE from 'three'

import { PDBLoader } from 'three/addons/loaders/PDBLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const pdbLoader = new PDBLoader();

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let estrogen: THREE.Group, river: THREE.Mesh;
let game1: THREE.Mesh;
let sceneObjects: THREE.Group;
let controls: OrbitControls;
const offset = new THREE.Vector3();

const debugCam = false;

let path: string = "/"

export function updatePath(newPath: string) {
    console.log(newPath)
    path = newPath;
    if (camera != null) {
        changeScene()
    }
}

export function MainBG() {

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
    sceneObjects = new THREE.Group();

    // Main Renderer
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //camera.position.setZ(30);
    camera.position.setX(-3);

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

    if (debugCam) {
        controls = new OrbitControls(camera, renderer.domElement);
    }
    changeScene();

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

    const time = Date.now() * 0.0004;

    switch (path) {
        case "/":
            estrogen.rotation.y = time;

            river.rotation.y = time;
            river.rotation.x = time * 2
            river.rotation.z = time * 0.5
            break;
        case "/games":
            game1.rotation.y = time;
            break;

        default:
            break;
    }

    if (debugCam) {
        controls.update();
    }

    render();

}

function render() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

function changeScene() {
    sceneObjects.clear();
    switch (path) {
        case "/":
            setupHome()
            camera.rotation.y = 0
            break;
        case "/games":
            setupGames()
            camera.rotation.y = -90
            break;
        case "/photography":
            camera.rotation.y = 150
            break;
    }
}

function setupHome() {
    // estrogen molecule
    estrogen = new THREE.Group();
    estrogen.scale.set(0.05, 0.05, 0.05)
    estrogen.position.set(-30, 0, -50)
    sceneObjects.add(estrogen);

    // Avatar

    const riverTexture = new THREE.TextureLoader().load('/avatar.png');
    riverTexture.colorSpace = THREE.SRGBColorSpace
    river = new THREE.Mesh(
        new THREE.BoxGeometry(3, 3, 3),
        new THREE.MeshBasicMaterial({ map: riverTexture })
    );
    river.position.z = -8;
    river.position.x = 4;
    sceneObjects.add(river);

    scene.add(sceneObjects)

    render();
    loadMolecule("estrogen.pdb", estrogen);
}

function setupGames() {
    const game1Texture = new THREE.TextureLoader().load('https://placehold.co/1280x720/png')
    game1 = new THREE.Mesh(
        new THREE.PlaneGeometry(16, 9),
        new THREE.MeshBasicMaterial({ map: game1Texture, color: '#FFFFFF' })
    );
    game1.position.set(-4, 0, -8)
    sceneObjects.add(game1);

    render();
}

function loadMolecule(model: string, group: THREE.Group) {

    const url = 'models/' + model;

    while (group.children.length > 0) {

        const object = group.children[0];
        object.parent?.remove(object);

    }

    pdbLoader.load(url, function (pdb) {

        const geometryAtoms = pdb.geometryAtoms;
        const geometryBonds = pdb.geometryBonds;
        const json = pdb.json;

        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const sphereGeometry = new THREE.IcosahedronGeometry(1, 3);

        geometryAtoms.computeBoundingBox();
        geometryAtoms.boundingBox?.getCenter(offset).negate();

        geometryAtoms.translate(offset.x, offset.y, offset.z);
        geometryBonds.translate(offset.x, offset.y, offset.z);

        let positions = geometryAtoms.getAttribute('position');
        const colors = geometryAtoms.getAttribute('color');

        const position = new THREE.Vector3();
        const color = new THREE.Color();

        for (let i = 0; i < positions.count; i++) {

            position.x = positions.getX(i);
            position.y = positions.getY(i);
            position.z = positions.getZ(i);

            color.r = colors.getX(i);
            color.g = colors.getY(i);
            color.b = colors.getZ(i);

            const material = new THREE.MeshPhongMaterial({ color: color });

            const object = new THREE.Mesh(sphereGeometry, material);
            object.position.copy(position);
            object.position.multiplyScalar(75);
            object.scale.multiplyScalar(25);
            group.add(object);

            const atom = json.atoms[i];

            const text = document.createElement('div');
            text.className = 'label';
            text.style.color = 'rgb(' + atom[3][0] + ',' + atom[3][1] + ',' + atom[3][2] + ')';
            text.textContent = atom[4];

        }

        positions = geometryBonds.getAttribute('position');

        const start = new THREE.Vector3();
        const end = new THREE.Vector3();

        for (let i = 0; i < positions.count; i += 2) {

            start.x = positions.getX(i);
            start.y = positions.getY(i);
            start.z = positions.getZ(i);

            end.x = positions.getX(i + 1);
            end.y = positions.getY(i + 1);
            end.z = positions.getZ(i + 1);

            start.multiplyScalar(75);
            end.multiplyScalar(75);

            const object = new THREE.Mesh(boxGeometry, new THREE.MeshPhongMaterial({ color: color }));
            object.position.copy(start);
            object.position.lerp(end, 0.5);
            object.scale.set(5, 5, start.distanceTo(end));
            object.lookAt(end);
            group.add(object);

        }

        render();

    });

}