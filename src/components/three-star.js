import React from 'react';

const RADIUS = 0.8;

const ThreeStar = ({ x, y, z }) => {
  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[RADIUS, 32, 16]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default ThreeStar;
