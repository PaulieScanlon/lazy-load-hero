import React from 'react';

import { Canvas } from '@react-three/fiber';

import ThreeStars from './three-stars';

const ThreeCanvas = ({ className }) => {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false }}
      camera={{
        near: 1,
        far: 1000,
        fov: 75,
        position: [0, 0, -200]
      }}
    >
      <ambientLight intensity={0.1} />
      <color attach="background" args={['#12071F']} />
      <directionalLight position={[-100, 0, 0]} color="#ffffff" />
      <directionalLight position={[0, 0, -100]} color="#BC027F" />
      <ThreeStars />
    </Canvas>
  );
};

export default ThreeCanvas;
