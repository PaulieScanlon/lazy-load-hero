import React, { useState, useEffect, Suspense, lazy, Fragment } from 'react';

const ThreeCanvas = lazy(() => import('./three-canvas'));

const ThreeLazy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Fragment>
      {!isMounted || navigator?.connection?.saveData || !matchMedia('(min-width: 768px)').matches ? null : (
        <Suspense fallback={null}>
          <ThreeCanvas />
        </Suspense>
      )}
    </Fragment>
  );
};

export default ThreeLazy;
