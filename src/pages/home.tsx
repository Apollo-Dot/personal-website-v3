import { useEffect, useState } from 'preact/hooks'
import { SceneInit } from '../lib/ThreeSceneInit'
import './home.scss'

import { NavBar } from '../components/NavBar/navbar'
import * as THREE from 'three';

export function Home() {
  const [count, setCount] = useState(0)

  // Scroll Animation

  useEffect(() => {
    const threeCore = new SceneInit('myThreeJsCanvas')
    threeCore.initialize();
    threeCore.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    threeCore.scene!.add(boxMesh);

  }, []);

  return (
    <>
      <canvas id="myThreeJsCanvas" />
    </>
  )
}
