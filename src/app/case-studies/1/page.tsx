"use client"
import React, { useState } from 'react';
import { ChevronDown, Calendar, Code, Palette, TestTube, Zap, Check, ArrowRight, Clock, Users, Target } from 'lucide-react';
import Link from 'next/link';

const DevelopmentProcess = () => {
  const [activePhase, setActivePhase] = useState(0);

  const developmentPhases = [
    {
      phase: 1,
      title: "Discovery & Planning",
      duration: "2 Days",
      tasks: [
        "Client requirements analysis",
        "Competitor research",
        "Project scope definition",
        "Technology stack selection",
        "Timeline planning"
      ],
      changes: [
        "Initial concept refinement based on client feedback",
        "Added multiple location support (Siddhpur & Ahmedabad)",
        "Integrated dual phone number systems"
      ]
    },
    {
      phase: 2,
      title: "Design & Wireframing",
      duration: "3 Days",
      tasks: [
        "UI/UX design creation",
        "Color scheme selection",
        "Component library setup",
        "Responsive breakpoints planning",
        "Asset collection and optimization"
      ],
      changes: [
        "Changed from single-page to multi-section layout",
        "Enhanced hero section with stronger call-to-action",
        "Added service categorization for better UX"
      ]
    },
    {
      phase: 3,
      title: "Development Setup",
      duration: "1 Day",
      tasks: [
        "Next.js project initialization",
        "Tailwind CSS configuration",
        "Folder structure setup",
        "Component architecture planning",
        "Development environment setup"
      ],
      changes: [
        "Switched from Create React App to Next.js for better SEO",
        "Added TypeScript for type safety",
        "Implemented absolute imports"
      ]
    },
    {
      phase: 4,
      title: "Core Development",
      duration: "5 Days",
      tasks: [
        "Header and navigation implementation",
        "Hero section development",
        "Services section with interactive components",
        "Gallery implementation",
        "Contact forms and booking system"
      ],
      changes: [
        "Added smooth scrolling navigation",
        "Implemented image optimization with Next.js Image",
        "Enhanced mobile responsiveness"
      ]
    },
    {
      phase: 5,
      title: "Content Integration",
      duration: "2 Days",
      tasks: [
        "Service descriptions and pricing",
        "Customer reviews integration",
        "Gallery images optimization",
        "SEO meta tags implementation",
        "Content proofreading and editing"
      ],
      changes: [
        "Added Google Reviews widget integration",
        "Implemented dynamic service cards",
        "Enhanced content readability"
      ]
    },
    {
      phase: 6,
      title: "Testing & Optimization",
      duration: "2 Days",
      tasks: [
        "Cross-browser testing",
        "Mobile responsiveness testing",
        "Performance optimization",
        "SEO audit and improvements",
        "Accessibility testing"
      ],
      changes: [
        "Fixed contrast ratio for better accessibility",
        "Optimized image loading performance",
        "Improved page load speed from 4s to 1.8s"
      ]
    }
  ];

  const technologies = [
    { 
      name: "Next.js", 
      purpose: "React framework for production", 
      usage: "Core framework for SSR and performance",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      name: "Tailwind CSS", 
      purpose: "Utility-first CSS framework", 
      usage: "Rapid UI development and responsive design",
      icon: <Palette className="w-6 h-6" />
    },
    { 
      name: "React", 
      purpose: "JavaScript library for UI", 
      usage: "Component-based architecture",
      icon: <Code className="w-6 h-6" />
    },
    { 
      name: "JavaScript ES6+", 
      purpose: "Modern JavaScript features", 
      usage: "Interactive functionality and logic",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    {
      feature: "Responsive Design",
      description: "Fully mobile-friendly across all devices",
      implementation: "Tailwind CSS breakpoints and flexbox/grid",
      impact: "60% mobile traffic handled seamlessly",
      icon: "📱"
    },
    {
      feature: "Service Showcase",
      description: "Comprehensive service display with categories",
      implementation: "Dynamic component system with hover effects",
      impact: "Increased service inquiries by 45%",
      icon: "🎯"
    },
    {
      feature: "Google Reviews Integration",
      description: "Live customer reviews display",
      implementation: "Custom widget with review aggregation",
      impact: "Built trust with 4.7/5 rating display",
      icon: "⭐"
    },
    {
      feature: "Fast Performance",
      description: "Optimized loading speeds",
      implementation: "Next.js Image optimization, code splitting",
      impact: "Page load time reduced to 1.8 seconds",
      icon: "⚡"
    }
  ];

  const stats = [
    { value: "15", label: "Days Total", icon: <Clock className="w-6 h-6" /> },
    { value: "6", label: "Phases", icon: <Target className="w-6 h-6" /> },
    { value: "98%", label: "Performance Score", icon: <Zap className="w-6 h-6" /> },
    { value: "45%", label: "Traffic Increase", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Hero Section */}
        <div className="mb-20 mt-10 text-center">
          <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-normal tracking-wider uppercase">Development Process</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
            Dhruvi Beauty
            <span className="block font-extralight italic">Care Website</span>
          </h1>
          
          <p className="text-xl font-normal text-white/70 max-w-3xl mx-auto leading-relaxed">
            Behind the scenes: How we built Dhruvi Beauty Care's website from concept to launch 
            using modern technologies and agile development practices.
          </p>
        </div>

        {/* Project Stats */}
        <section className="mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-xl text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-normal mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-white/70 text-sm font-normal">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Development Timeline</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              A comprehensive breakdown of our 15-day development journey, showing each phase and key decisions made along the way.
            </p>
          </div>

          {/* Phase Navigation */}
          <div className="flex overflow-x-auto pb-8 mb-12 scrollbar-hide">
            <div className="flex space-x-4 min-w-max">
              {developmentPhases.map((phase, index) => (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(index)}
                  className={`flex-shrink-0 px-8 py-4 rounded-xl border transition-all duration-300 ${
                    activePhase === index
                      ? 'border-blue-400 bg-blue-400/10 text-white'
                      : 'border-white/10 bg-gray-900/20 text-white/70 hover:border-white/30'
                  }`}
                >
                  <div className="text-lg font-normal">Phase {phase.phase}</div>
                  <div className="text-sm opacity-80">{phase.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-sm overflow-hidden">
            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between mb-8">
                <h3 className="text-3xl font-normal tracking-wide">
                  {developmentPhases[activePhase].title}
                </h3>
                <span className="border border-blue-400/30 text-blue-400 px-4 py-2 rounded-full text-sm font-normal bg-blue-400/10">
                  {developmentPhases[activePhase].duration}
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-normal text-white mb-6 text-lg flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    Tasks Completed
                  </h4>
                  <ul className="space-y-4">
                    {developmentPhases[activePhase].tasks.map((task, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-400/10 border border-green-400/20 p-1 rounded-full mr-4 mt-1">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/70 font-normal leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-normal text-white mb-6 text-lg flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    Key Changes & Decisions
                  </h4>
                  <ul className="space-y-4">
                    {developmentPhases[activePhase].changes.map((change, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-400/10 border border-blue-400/20 p-1 rounded-full mr-4 mt-1">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-white/70 font-normal leading-relaxed">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Technology Stack</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Modern technologies chosen for performance, scalability, and developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-xl text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-normal group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm font-normal mb-3 leading-relaxed">
                    {tech.purpose}
                  </p>
                  <p className="text-white/90 font-normal leading-relaxed">
                    {tech.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features Implementation */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Key Features Implementation</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Detailed breakdown of major features and their technical implementation.
            </p>
          </div>

          <div className="space-y-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <h3 className="text-xl font-normal group-hover:text-white transition-colors duration-300">
                        {feature.feature}
                      </h3>
                    </div>
                    <span className="border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-normal bg-green-400/10">
                      Impact: {feature.impact}
                    </span>
                  </div>
                  <p className="text-white/70 font-normal leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="border border-white/10 rounded-lg p-4 bg-black/20">
                    <h4 className="font-normal text-white mb-3">Implementation:</h4>
                    <p className="text-white/70 font-normal leading-relaxed">
                      {feature.implementation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Challenges & Solutions</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group cursor-default">
              <div className="border border-red-400/20 rounded-xl p-6 bg-red-400/5 backdrop-blur-sm hover:border-red-400/30 transition-all duration-500 h-full">
                <h3 className="text-xl font-normal mb-6 flex items-center gap-3 text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Challenges Faced
                </h3>
                <ul className="space-y-4 text-red-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Dual location content management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Mobile-first responsive design requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Performance optimization for image-heavy gallery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>SEO optimization for local search</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Cross-browser compatibility</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="border border-green-400/20 rounded-xl p-6 bg-green-400/5 backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 h-full">
                <h3 className="text-xl font-normal mb-6 flex items-center gap-3 text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Solutions Implemented
                </h3>
                <ul className="space-y-4 text-green-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Dynamic location-based content components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Tailwind CSS mobile-first approach</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Next.js Image optimization and lazy loading</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Structured data and local SEO implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Comprehensive browser testing suite</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-32">
          <div className="border border-white/10 rounded-2xl p-12 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
            <h2 className="text-4xl font-normal text-center mb-16 tracking-wide">Performance Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">98%</div>
                <p className="text-white/70 font-normal">Google PageSpeed Score</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">1.8s</div>
                <p className="text-white/70 font-normal">Load Time</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">45%</div>
                <p className="text-white/70 font-normal">Mobile Traffic Increase</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">100%</div>
                <p className="text-white/70 font-normal">Core Web Vitals</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-normal mb-6 tracking-wide">Start Your Project Journey</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to build your next website with a transparent, structured development process?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg">
              Start Your Project
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg">
              Download Process PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevelopmentProcess;