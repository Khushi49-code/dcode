"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingTransitionProps {
  children: React.ReactNode;
}

const LoadingTransition: React.FC<LoadingTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after overlay slides down
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Complete loading after all animations
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const words = ["hello.", "dcodes.", "welcome."];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1]
            }}
          >
            {/* Yellow background overlay */}
            <motion.div
              className="absolute inset-0 bg-yellow-400"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.76, 0, 0.24, 1]
              }}
              style={{ transformOrigin: "top" }}
            />

            {/* Text animation */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <AnimatePresence>
                {showText && words.map((word, index) => (
                  <motion.div
                    key={word}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: [0.76, 0, 0.24, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black tracking-tight">
                      {word}
                    </h1>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.3 }}
                className="flex space-x-1 mt-8"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-black rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default LoadingTransition;