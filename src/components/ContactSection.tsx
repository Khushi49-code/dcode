'use client';

import { motion } from 'framer-motion';

interface ContactSectionProps {
  email: string;
  linkedin: string;
}

export default function ContactSection({ email, linkedin }: ContactSectionProps) {
  const handleRequestMeeting = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 border border-gray-700"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        <motion.h2
          animate={{ 
            textShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 0px rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="text-3xl font-bold mb-6"
        >
          Connect with Our CEO
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <motion.p
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              className="text-gray-300 mb-4"
            >
              For speaking engagements, interviews, or collaboration opportunities
            </motion.p>
            <div className="space-y-2">
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-300"
              >
                📧 Email: {email}
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-300"
              >
                🔗 LinkedIn:{' '}
                <motion.button
                  onClick={handleLinkedInClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-300 hover:text-blue-200 underline cursor-pointer"
                >
                  View Profile
                </motion.button>
              </motion.p>
            </div>
          </div>
          
          <motion.button
            onClick={handleRequestMeeting}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              background: [
                "linear-gradient(45deg, #2563eb, #3b82f6)",
                "linear-gradient(45deg, #3b82f6, #6366f1)",
                "linear-gradient(45deg, #6366f1, #2563eb)"
              ]
            }}
            transition={{ 
              background: {
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="mt-6 md:mt-0 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden"
          >
            {/* Button shine effect */}
            <motion.span
              className="absolute top-0 left-0 w-full h-full bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Request Meeting</span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}