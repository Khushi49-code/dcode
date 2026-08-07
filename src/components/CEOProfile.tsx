'use client';

import { motion } from 'framer-motion';
import { CEOData } from '@/types';

interface CEOProfileProps {
  data: CEOData;
}

export default function CEOProfile({ data }: CEOProfileProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${data.email}`;
  };

  const handleLinkedInClick = () => {
    window.open(data.linkedin, '_blank', 'noopener,noreferrer');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-gray-700"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image with Floating Animation */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-900/50 shadow-lg">
            <motion.div
              animate={{ 
                background: [
                  'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                  'linear-gradient(45deg, #8B5CF6, #EC4899)',
                  'linear-gradient(45deg, #EC4899, #3B82F6)',
                ]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full flex items-center justify-center text-white text-6xl"
            >
              {data.name.split(' ').map(n => n[0]).join('')}
            </motion.div>
          </div>
          {/* Animated rings */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
          />
        </motion.div>
        
        {/* Profile Details */}
        <div className="flex-1">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-2"
          >
            {data.name}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-400 mb-6"
          >
            {data.title}
          </motion.p>
          
          <motion.div variants={containerVariants} className="space-y-4 mb-8">
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg"
            >
              {data.bio}
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30"
              >
                <h3 className="font-semibold text-blue-400 mb-1">Education</h3>
                <p className="text-gray-300">{data.education}</p>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-green-900/20 p-4 rounded-lg border border-green-700/30"
              >
                <h3 className="font-semibold text-green-400 mb-1">Tenure</h3>
                <p className="text-gray-300">{data.tenure}</p>
              </motion.div>
            </div>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-purple-900/20 p-4 rounded-lg border border-purple-700/30"
            >
              <h3 className="font-semibold text-purple-400 mb-1">Leadership Philosophy</h3>
              <p className="text-gray-300">{data.philosophy}</p>
            </motion.div>
          </motion.div>
          
          {/* Action Buttons with Hover Animations */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✉️
              </motion.span>
              Contact CEO
            </motion.button>
            <motion.button 
              onClick={handleLinkedInClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gray-700 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 border border-gray-600"
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💼
              </motion.span>
              LinkedIn Profile
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}