import React from 'react';

import ThreeLazy from '../components/three-lazy';

const Page = () => {
  return (
    <main className="relative">
      <div className="min-h-full h-[500px]">
        <div className="relative max-w-section mx-auto flex items-center justify-center text-center w-full h-full z-10 p-4">
          <div className="grid gap-4">
            <h1 className="text-4xl sm:text-5xl font-black text-brand-gradient">
              Performance Optimization for three.js Web Animations
            </h1>
            <h2 className="text-lg text-white">A three.js hero animation lazy-loaded using React.lazy / Suspense</h2>
            <div>
              <a
                href="https://www.gatsbyjs.com/blog/performance-optimization-for-three-js-web-animations"
                rel="noopener"
                className="border-rainbow-gradient border-double border-4 border-transparent rounded-full bg-origin-border"
              >
                <span className="text-white mx-4 my-1">Read More on the Gatsby Blog</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-brand-background absolute top-0 left-0 w-full h-full z-0">
          <ThreeLazy />
        </div>
      </div>
    </main>
  );
};

export default Page;
