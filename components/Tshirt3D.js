import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function TshirtModel({ gltf }) {
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Update rotation on every render
    }
  }, [modelRef]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Update rotation on every frame
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={modelRef.current} />
    </>
  );
}

export function TshirtModelLoader() {
  const [loading, setLoading] = useState(true);
  const [gltf, setGltf] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load('/models/tshirt.glb', (loadedGltf) => {
      const tshirt = loadedGltf.scene;
      tshirt.scale.setScalar(5); // Example: Scaling the tshirt
      scene.add(tshirt); // Assuming `scene` is available in your context
      setGltf(tshirt);
      setLoading(false);
    },
    // onProgress callback
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    // onError callback
    (error) => {
      console.error('Error loading GLB file:', error);
      setLoading(false);
    });
  }, []);

  return loading ? <div>Loading...</div> : <Canvas>{gltf && <TshirtModel gltf={gltf} />}</Canvas>;
}
