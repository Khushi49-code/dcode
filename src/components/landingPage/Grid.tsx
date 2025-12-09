// "use client";

// import React from "react";
// import { IconCloudDemo } from "../megicUi/icon";
// import { motion } from "framer-motion";
// import { Globe } from "../ui/globe";

// export default function StatsGrid() {
//   // Variants for staggered entrance animation of grid items
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // Variants for individual item entrance (fade up)
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a smooth feel
//       },
//     },
//   };

//   // Hover effect variants for cards
//   const cardHoverVariants = {
//     hover: {
//       scale: 1.02,
//       transition: { type: "spring", stiffness: 300, damping: 30 },
//     },
//   };

//   return (
//     <motion.div
//       className="p-8 md:p-16  text-white min-h-screen flex items-center justify-center"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="grid grid-cols-1  md:grid-cols-3 gap-8 w-full max-w-7xl">
        
//         {/* Tech Stack Section */}
//         <motion.div
//           className="p-8 bg-neutral-950/70 backdrop-blur-xl rounded-2xl shadow-lg  border-neutral-800 transition-all hover:border-blue-500/40"
//           variants={itemVariants}
//           whileHover="hover"
//         >
//           <motion.h2 
//             className="text-2xl font-semibold mb-6 tracking-tight text-neutral-200"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, transition: { delay: 0.3 } }}
//           >
//             Our Tech Stack
//           </motion.h2>
//           <div className="flex flex-wrap gap-3">
//             {[
//               "React.js", "Next.js", "Angular", "Laravel", "Django", 
//               "MongoDB","Flutter", "Firebase", "AWS", "Python", "GitHub"
//             ].map((tech, index) => (
//               <motion.span
//                 key={index}
//                 className="px-4 py-2 rounded-full border border-neutral-700 text-sm font-medium text-neutral-400 hover:text-white hover:border-blue-500/60 transition-colors"
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.96 }}
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         {/* Combined Stats Section */}
//         <motion.div
//           className="flex flex-col gap-8"
//           variants={itemVariants}
//           whileHover="hover"
//         >
//           {/* Websites Built Card */}
//           <motion.div
//             className="group relative h-full p-8 lg:p-10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
//             variants={cardHoverVariants}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//             <div className="relative z-10 text-center">
//               <h3 className="text-6xl lg:text-7xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 mb-3">
//                 Over 1000+ successful digital transformations delivered globally.
// +
//               </h3>
//               <p className="text-lg text-zinc-400 font-normal tracking-wide">Empowering industries with cutting-edge technologies like:
// </p>
//             </div>
//           </motion.div>

//           {/* Happy Clients Card */}
//           <motion.div
//             className="group relative h-full p-8 lg:p-10  rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
//             variants={cardHoverVariants}
//           >
//             <div className="absolute inset-0  bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0  transition-opacity duration-700" />
//             <div className="relative z-10 text-center">
                
//                <Globe className="top-[-40] w-[70%]" />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Testimonial / Icon Cloud Section */}
//         <motion.div
//           className="p-8 bg-neutral-950/70 backdrop-blur-xl rounded-2xl shadow-lg  border-neutral-800 transition-all hover:border-blue-500/40 flex items-center justify-center cursor-pointer"
//           variants={itemVariants}
//           whileHover="hover"
//         >
//           <IconCloudDemo />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }




"use client";

import React from "react";
import { IconCloudDemo } from "../megicUi/icon";
import { motion } from "framer-motion";
import { Globe } from "../ui/globe";

export default function StatsGrid() {
  // Enhanced variants for smoother animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  // Smoother item entrance
  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Enhanced hover effects
  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -4,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      },
    },
  };

  // Tech tag hover animation
  const techTagHover = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.6)",
      color: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="px-6 py-12 md:px-8 md:py-20 lg:p-16 text-white min-h-screen flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
        
        {/* Tech Stack Section - Improved */}
        <motion.div
          className="p-6 md:p-8 bg-neutral-950/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-neutral-800/80 transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.h2 
            className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-neutral-100 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            Our Tech Stack
          </motion.h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "React.js", "Next.js", "Angular", "Laravel", "Django", 
              "MongoDB", "Flutter", "Firebase", "AWS", "Python", "GitHub","PHP",".Net","MERN","WordPress","Shopify"
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-6 py-4 md:px-4 md:py-2 rounded-full border border-neutral-700 text-2xl md:text-sm font-medium text-neutral-400 transition-all duration-200 cursor-default"
                variants={techTagHover}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3 + index * 0.05 }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Combined Stats Section - Enhanced */}
        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          variants={itemVariants}
        >
          {/* Websites Built Card */}
          <motion.div
            className="group relative h-full p-6 md:p-8 lg:p-10 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-2xl border border-zinc-800/60 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
            variants={cardHoverVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-blue-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 mb-4 leading-tight">
                1000+
              </h3>
              <p className="text-base md:text-lg text-zinc-300 font-medium mb-2">
                Successful Digital Transformations
              </p>
              <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                Delivered globally, empowering industries with cutting-edge technologies and innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Happy Clients Card */}
          <motion.div
            className="group relative h-full p-6 md:p-8 lg:p-10 bg-gradient-to-br from-purple-900/20 via-zinc-900/90 to-pink-900/20 backdrop-blur-2xl border border-zinc-800/60 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
            variants={cardHoverVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-full h-48 md:h-56 flex items-center justify-center">
                <Globe className="w-full max-w-[200px] md:max-w-[200px]" />
              </div>
              {/* <p className="text-sm md:text-base text-zinc-300 font-medium mt-4 text-center">
                Global Reach & Impact
              </p> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial / Icon Cloud Section - Enhanced */}
        <motion.div
          className="p-6 md:p-8 bg-neutral-950/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-neutral-800/80 transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10 flex items-center justify-center cursor-pointer"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="w-full h-64 md:h-72 flex items-center justify-center">
            <IconCloudDemo />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}