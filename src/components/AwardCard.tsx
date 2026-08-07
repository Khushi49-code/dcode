'use client';

import { motion } from 'framer-motion';
import { Award } from '@/types';

interface AwardCardProps {
  award: Award;
}

export default function AwardCard({ award }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        x: 5,
        transition: { duration: 0.2 }
      }}
      className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300 border border-gray-700 group"
    >
      {/* Shining effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <h3 className="font-bold text-xl text-white mb-2 md:mb-0">{award.name}</h3>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-yellow-900/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-700/30"
        >
          {award.year}
        </motion.span>
      </div>
      
      <div className="mb-3">
        <motion.span
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-blue-400 font-medium"
        >
          {award.organization}
        </motion.span>
      </div>
      
      <p className="text-gray-300">{award.description}</p>
      
      {/* Animated star */}
      <motion.div
        className="absolute top-4 right-4 text-yellow-400"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        ⭐
      </motion.div>
    </motion.div>
  );
}