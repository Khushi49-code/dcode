'use client';

import { motion } from 'framer-motion';
import { TimelineEvent } from '@/types';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Animated vertical line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
      />
      
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Animated timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.5 }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-800 z-10"
          >
            {/* Pulsing effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </motion.div>
          
          {/* Year */}
          <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold"
            >
              {event.year}
            </motion.div>
          </div>
          
          {/* Event card */}
          <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mt-4 md:mt-0`}>
            <motion.div
              whileHover={{ 
                x: index % 2 === 0 ? -5 : 5,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-6 border border-gray-700"
            >
              <h3 className="font-bold text-lg text-white mb-2">{event.event}</h3>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}