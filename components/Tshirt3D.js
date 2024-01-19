// Tshirt3d.js
import React, { useRef } from 'react';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

extend({ OrbitControls });

const Tshirt3d = ({ modelPath }) => {
  const tShirtRef = useRef();
  const { camera, gl } = useThree();

  // Load GLB model
  const gltf = useLoader(GLTFLoader, modelPath);

  // Set up orbit controls
  useFrame(() => {
    tShirtRef.current.rotation.y += 0.005;
  });

  return (
    <group>
      <mesh ref={tShirtRef}>
        {/* Add the GLB model to the scene */}
        <primitive object={gltf.scene} />
      </mesh>
      <OrbitControls args={[camera, gl.domElement]} />
    </group>
  );
};

const TShirtScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Tshirt3d modelPath="/models/tshirt.glb" />
    </Canvas>
  );
};

export default TShirtScene;
