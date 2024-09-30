import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three'

function Model() {
    const { scene } = useGLTF('/dice-model/scene.gltf');
    const ref = useRef(scene);

    // Função para simular o girinho
    const rollDice = () => {
        if (!ref.current) return;

        const duration = 1.5;
        const startRotation = ref.current.rotation.clone();
        const endRotation = new THREE.Euler(
            startRotation.x + (Math.random() * Math.PI * 2),
            startRotation.y + (Math.random() * Math.PI * 2),
            startRotation.z + (Math.random() * Math.PI * 2)
        );

        let startTime: number = 0;

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const elapsed = (time - startTime) / 1000;

            if (elapsed < duration) {
                ref.current.rotation.x = THREE.MathUtils.lerp(startRotation.x, endRotation.x, elapsed / duration);
                ref.current.rotation.y = THREE.MathUtils.lerp(startRotation.y, endRotation.y, elapsed / duration);
                ref.current.rotation.z = THREE.MathUtils.lerp(startRotation.z, endRotation.z, elapsed / duration);
                requestAnimationFrame(animate);
            } else {
                ref.current.rotation.set(endRotation.x, endRotation.y, endRotation.z);
            }
        };

        requestAnimationFrame(animate);
    };

    // Chama a função de rolamento ao montar o componente
    useEffect(() => {
        rollDice();
    }, []);

    return <primitive object={scene} scale={3} />;
}

function SceneCanva() {
  return (
    <Canvas>
      <ambientLight intensity={2.5} />
      <pointLight position={[5, 5, 5]} intensity={50}/>
      <OrbitControls />
      <Model />
    </Canvas>
  );
}

export default SceneCanva;
