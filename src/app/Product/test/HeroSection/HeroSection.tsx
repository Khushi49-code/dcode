"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Real-time Dashboard",
    description: "Monitor sales, inventory, and customer data in real-time with interactive charts and analytics.",
    image: "/dashboard.png",
  },
  {
    id: 2,
    title: "Customer Management",
    description: "Centralized customer database with contact details, service history, and communication logs.",
    image: "/customer.png",
  },
  {
    id: 3,
    title: "Sales Tracking",
    description: "Track leads, quotations, and conversions with automated follow-up reminders and pipeline view.",
    image: "/sales.png",
  },
  {
    id: 4,
    title: "Inventory Control",
    description: "Manage CNG kit inventory with stock alerts, supplier tracking, and automated reordering.",
    image: "/inventory.png",
  },
  {
    id: 5,
    title: "Service Management",
    description: "Schedule installations, track service history, and manage technician assignments.",
    image: "/service.png",
  },
  {
    id: 6,
    title: "Reporting & Analytics",
    description: "Generate financial reports, performance metrics, and business insights with one click.",
    image: "/report.png",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-t from-black to-gray-900 text-white py-16 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Powerful Features for Your <span className="text-blue-500">CNG Business</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how our ERP system transforms your operations with intelligent modules.
          </p>
        </div>

        {/* Main Grid: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-12 items-start relative">
          
          {/* Left Side: Feature List (Moves to top on mobile) */}
          <div className="w-full lg:w-5/12 order-1 lg:order-1">
            <div className="relative pl-0 lg:pl-12">
              {/* Desktop Progress Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800 hidden lg:block">
                <div
                  className="absolute w-full bg-blue-500 transition-all duration-500"
                  style={{
                    height: `${100 / features.length}%`,
                    transform: `translateY(${activeIndex * 100}%)`,
                  }}
                />
              </div>

              <div className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-gray-800/40 border-blue-500/50"
                        : "bg-transparent border-transparent hover:bg-gray-800/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-mono font-bold ${
                          activeIndex === index ? "text-blue-400" : "text-gray-600"
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
                          activeIndex === index ? "text-white" : "text-gray-400"
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180 text-blue-400" : "text-gray-600"
                      }`} />
                    </div>

                    <div className={`grid transition-all duration-300 ease-in-out ${
                      activeIndex === index 
                        ? "grid-rows-[1fr] opacity-100 mt-3" 
                        : "grid-rows-[0fr] opacity-0"
                    }`}>
                      <div className="overflow-hidden">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Image Preview (Sticks only on desktop) */}
          <div className="w-full lg:w-7/12 order-2 lg:order-2 lg:sticky lg:top-24">
            <div className="bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
              
              {/* Image Display Area */}
              <div className="relative aspect-[4/3] md:aspect-video bg-black/20 flex items-center justify-center p-6 md:p-12">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center p-8 ${
                      activeIndex === index 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Info Bar - RESTORED & IMPROVED */}
              <div className="p-6 md:p-8 border-t border-gray-800 bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {features[activeIndex].title}
                    </h4>
                    <p className="text-blue-400 text-xs font-mono uppercase tracking-widest">
                      Module {activeIndex + 1} of {features.length}
                    </p>
                  </div>
                  
                  {/* Dash Indicators */}
                  <div className="flex items-center gap-2">
                    {features.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${
                          activeIndex === idx ? "w-10 bg-blue-500" : "w-4 bg-gray-800 hover:bg-gray-700"
                        }`}
                        aria-label={`Go to module ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {features[activeIndex].description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}