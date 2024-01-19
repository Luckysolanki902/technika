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
    const loadModel = async () => {
      const loader = new GLTFLoader();
      const loadedGltf = await loader.loadAsync('/models/tshirt.glb');
      setGltf(loadedGltf.scene);
      setLoading(false);
    };

    loadModel();
  }, []);

  return loading ? <div>Loading...</div> : <Canvas>{gltf && <TshirtModel gltf={gltf} />}</Canvas>;
}
