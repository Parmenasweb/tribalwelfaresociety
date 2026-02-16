'use client';

import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-stone-900 focus:text-white focus:rounded-xl focus:font-bold focus:shadow-2xl"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
