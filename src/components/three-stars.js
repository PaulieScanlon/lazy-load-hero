import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import ThreeStar from './three-star';

const RANGE = 300;

const ThreeStars = () => {
  const mesh = useRef(null);

  useFrame(() => {
    return (mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += 0.001);
  });

  return (
    <mesh ref={mesh}>
      {new Array(200).fill('').map((_, index) => {
        const x = Math.random() * RANGE - RANGE / 2;
        const y = Math.random() * RANGE - RANGE / 2;
        const z = Math.random() * RANGE - RANGE / 2;

        return <ThreeStar key={index} x={x} y={y} z={z} />;
      })}
    </mesh>
  );
};

export default ThreeStars;
