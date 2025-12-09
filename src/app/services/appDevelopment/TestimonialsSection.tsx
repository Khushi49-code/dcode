import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "build native-feeling apps",
    role: "React Native — iOS & Android",
    image: "https://www.mooc.org/hubfs/web-programming-languages.jpg",
    quote: "Build native-feeling apps with React Native for Android and iOS. We deliver cross-platform performance, SEO-friendly web integrations, and the best UX/UI designs."
  },
  {
    id: 2,
    name: "build scalable apps",
    role: "highly scalable apps",
    image: "https://www.mooc.org/hubfs/web-programming-languages.jpg",
    quote: "Launch faster with Flutter and React Native apps. Code once, run anywhere without compromising user experience or functionality."
  },
  {
    id: 3,
    name: "build high-performance apps",
    role: "best performance apps",
    image: "https://www.mooc.org/hubfs/web-programming-languages.jpg",
    quote: "Power high-traffic ecosystems with secure, cloud-connected apps optimized for large-scale deployments and business-critical operations."
  }
];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-white mb-8">
             What <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 bg-clip-text text-transparent">We</span> Deliver

          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-normal">
We help businesses turn bold app ideas into scalable digital products that users love. Our mobile development services span across platforms, technologies, and industries.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-[#1a1f35] to-[#0f1420] rounded-2xl p-8 border border-gray-800/30 hover:border-purple-500/20 transition-all duration-500 h-full overflow-hidden">
                  {/* Gradient overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Decorative blur orbs */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    {/* Profile Section */}
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm font-normal">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 leading-relaxed text-base font-normal">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}