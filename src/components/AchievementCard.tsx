'use client';

import { motion } from 'framer-motion';
import { Achievement } from '@/types';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 group cursor-pointer"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      {/* Icon with animation */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatDelay: 3
        }}
        className="text-3xl mb-4"
      >
        {achievement.icon}
      </motion.div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div>
            <h3 className="font-bold text-xl text-white mb-1">{achievement.title}</h3>
            <motion.span
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              className="text-sm text-blue-400 font-semibold"
            >
              {achievement.year}
            </motion.span>
          </div>
        </div>
        
        <p className="text-gray-300">{achievement.description}</p>
      </div>
      
      {/* Animated underline on hover */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 absolute bottom-0 left-0 right-0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}