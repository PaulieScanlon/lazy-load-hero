import React, { useState, useEffect, Suspense, lazy } from 'react';

const ThreeCanvas = lazy(() => import('./three-canvas'));

const ThreeLazy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {!isMounted || navigator?.connection?.saveData || !matchMedia('(min-width: 768px)').matches ? null : (
        <Suspense fallback={null}>
          <ThreeCanvas />
        </Suspense>
      )}
    </>
  );
};

export default ThreeLazy;
