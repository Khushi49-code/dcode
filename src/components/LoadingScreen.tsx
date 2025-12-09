'use client';

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  children: React.ReactNode;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md w-full px-6 animate-pulse">
          {/* Logo/Brand */}
          <div className="mb-12">
            <h1 className="text-8xl font-normal text-white mb-3 animate-fade">
              Dcodes
            </h1>
            <p className="text-gray-400 text-sm tracking-wide animate-fade">
              AI Solutions for Modern Businesses
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
