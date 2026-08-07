'use client';

import { motion } from 'framer-motion';

export default function DarkStatsGrid() {
  const stats = [
    {
      icon: "🌍",
      title: "Global",
      subtitle: "Serving Clients Worldwide",
      description: "Trusted by businesses across multiple countries",
      borderColor: "border-blue-500",
      textColor: "text-blue-400"
    },
    {
      icon: "📊",
      title: "50",
      subtitle: "Projects Delivered",
      description: "From startups to enterprise solutions",
      borderColor: "border-green-500",
      textColor: "text-green-400"
    },
    {
      icon: "👥",
      title: "Expert",
      subtitle: "Team",
      description: "Experienced professionals in web, app, and software development",
      borderColor: "border-purple-500",
      textColor: "text-purple-400"
    },
    {
      icon: "⚡",
      title: "Modern",
      subtitle: "Technology Stack",
      description: "MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more",
      borderColor: "border-orange-500",
      textColor: "text-orange-400"
    },
    {
      icon: "🏢",
      title: "Multiple",
      subtitle: "Industries Served",
      description: "IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More",
      borderColor: "border-pink-500",
      textColor: "text-pink-400"
    }
  ];

  const technologies = ["MERN", "Laravel", "WordPress", "Flutter", "React Native", "Next.js", "TypeScript", "Node.js"];
  const industries = ["IT", "Manufacturing", "E-Commerce", "Logistics", "Healthcare", "Education", "Finance", "Retail"];

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 md:p-8"
    >
      {/* Floating background particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
          }}
          animate={{
            y: [null, Math.random() * 1000],
            x: [null, Math.random() * 1000],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section with Typing Effect */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16 pt-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                backgroundSize: "200% 100%" 
              }}
            >
              Global Impact
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Delivering excellence across borders with cutting-edge technology and expertise
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.header>

        {/* Stats Grid with Staggered Animation */}
        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border-l-4 ${stat.borderColor} border border-gray-700`}
            >
              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              <div className="flex items-start mb-6 relative z-10">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className={`w-14 h-14 rounded-lg bg-gray-900/70 border ${stat.borderColor} border-opacity-30 flex items-center justify-center mr-4`}
                >
                  <span className="text-3xl">{stat.icon}</span>
                </motion.div>
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`text-4xl font-bold ${stat.textColor}`}
                  >
                    {stat.title}
                  </motion.div>
                  <div className="text-lg font-semibold text-white">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 relative z-10">
                {stat.description}
              </p>
              
              {/* Animated tags */}
              {stat.title === "Modern" && (
                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-900/70 text-gray-300 rounded-lg text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
              
              {stat.title === "Multiple" && (
                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {industries.map((industry, i) => (
                    <motion.span
                      key={industry}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-900/70 text-gray-300 rounded-lg text-sm font-medium border border-gray-700"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              )}
              
              {/* Bottom accent */}
              <motion.div
                className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
          ))}
          
          {/* CTA Card with Pulse Animation */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 relative overflow-hidden bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-gray-700"
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <motion.h2
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(255, 255, 255, 0)",
                      "0 0 10px rgba(255, 255, 255, 0.3)",
                      "0 0 0px rgba(255, 255, 255, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="text-3xl font-bold text-white mb-3"
                >
                  Ready to Start Your Project?
                </motion.h2>
                <p className="text-gray-300 text-lg">
                  Join our global network of successful clients
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
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
                  className="px-8 py-3 text-white font-semibold rounded-lg relative overflow-hidden"
                >
                  <motion.span
                    className="absolute top-0 left-0 w-full h-full bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gray-800 text-gray-300 font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 transition duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.main>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 mb-12 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Fast Delivery", color: "blue" },
              { icon: "💎", title: "Premium Quality", color: "green" },
              { icon: "🛡️", title: "24/7 Support", color: "purple" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-6"
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className={`w-16 h-16 bg-${item.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-${item.color}-500/30`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">
                  {item.title === "Fast Delivery" && "Quick turnaround without compromising quality"}
                  {item.title === "Premium Quality" && "Enterprise-grade solutions for all project sizes"}
                  {item.title === "24/7 Support" && "Round-the-clock maintenance and support"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial with Floating Animation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700"
        >
          {/* Floating quote marks */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 left-4 text-6xl text-gray-600"
          >
            "
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-4 right-4 text-6xl text-gray-600"
          >
            "
          </motion.div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-xl text-gray-300 italic mb-6">
              Their expertise and modern technology stack transformed our digital presence. 
              The team delivered exceptional results beyond our expectations.
            </p>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-white">Sarah Johnson</div>
                <div className="text-gray-400">CTO, Global Tech Solutions</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-2 text-sm"
            >
              Transforming ideas into digital reality worldwide
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
}