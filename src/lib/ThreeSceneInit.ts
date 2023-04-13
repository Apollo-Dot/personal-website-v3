import * as THREE from 'three';

export class SceneInit {
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.Renderer;

    fov: number;
    nearPlane: number;
    farPlane: number;
    canvasId: string;

    clock?: THREE.Clock;

    ambientLight?: THREE.AmbientLight;
    directionalLight?: THREE.DirectionalLight;
    constructor(canvasId: string) {
        // NOTE: Core components to initialize Three.js app.
        this.scene = undefined;
        this.camera = undefined;
        this.renderer = undefined;

        // NOTE: Camera params;
        this.fov = 45;
        this.nearPlane = 1;
        this.farPlane = 1000;
        this.canvasId = canvasId;

        // NOTE: Additional components.
        this.clock = undefined;

        // NOTE: Lighting is basically required.
        this.ambientLight = undefined;
        this.directionalLight = undefined;
    }

    initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 48;

        // NOTE: Specify a canvas which is already created in the HTML.
        // @ts-ignore
        const canvas: HTMLCanvasElement = document.getElementById(this.canvasId)
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            // NOTE: Anti-aliasing smooths out the edges.
            antialias: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // this.renderer.shadowMap.enabled = true;
        document.body.appendChild(this.renderer.domElement);

        this.clock = new THREE.Clock();

        // ambient light which is for the whole scene
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.ambientLight.castShadow = true;
        this.scene.add(this.ambientLight);

        // directional light - parallel sun rays
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        // this.directionalLight.castShadow = true;
        this.directionalLight.position.set(0, 32, 64);
        this.scene.add(this.directionalLight);

        // if window resizes
        window.addEventListener('resize', () => this.onWindowResize(), false);
        document.body.onscroll = this.moveCamera

        const spaceTexture = new THREE.CubeTextureLoader()
            .setPath('/skybox/')
            .load([
                'right.png', 'left.png',
                'top.png', 'bottom.png',
                'front.png', 'back.png'
            ])
        this.scene.background = spaceTexture;
    }

    animate() {
        // NOTE: Window is implied.
        // requestAnimationFrame(this.animate.bind(this));
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
    }

    render() {
        // NOTE: Update uniform data on each render.
        // this.uniforms.u_time.value += this.clock.getDelta();
        this.renderer!.render(this.scene!, this.camera!);
    }

    moveCamera() {
        const t = document.body.getBoundingClientRect().top;

        this.camera!.position.z = t * -0.01;
        this.camera!.position.x = t * -0.0002;
        this.camera!.rotation.z = t * 0.0002;
    }

    onWindowResize() {
        this.camera!.aspect = window.innerWidth / window.innerHeight;
        this.camera!.updateProjectionMatrix();
        this.renderer!.setSize(window.innerWidth, window.innerHeight);
    }
}