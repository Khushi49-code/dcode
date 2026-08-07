"use client"
import React, { useState } from 'react';
import { ChevronDown, Calendar, Code, Palette, TestTube, Zap, Check, ArrowRight, Clock, Users, Target, Sparkles, BookOpen, Heart, Star } from 'lucide-react';
import Link from 'next/link';

const DevelopmentProcess = () => {
  const [activePhase, setActivePhase] = useState(0);

  const developmentPhases = [
    {
      phase: 1,
      title: "Spiritual Research & Planning",
      duration: "3 Days",
      tasks: [
        "Deep dive into Vedic rituals and terminology",
        "Client consultation for service requirements",
        "Traditional color scheme selection",
        "Project scope definition for religious services",
        "Content structure planning for ritual categories"
      ],
      changes: [
        "Added comprehensive ritual categorization (Shraddh Karma, Shanti Karma, Shubh Karya)",
        "Integrated Matrugaya Tirth specific content",
        "Implemented dual language support (English & Sanskrit terms)"
      ]
    },
    {
      phase: 2,
      title: "Traditional Design System",
      duration: "4 Days",
      tasks: [
        "Sacred color palette creation (saffron, gold, deep red)",
        "Typography selection reflecting traditional aesthetics",
        "Component design with spiritual symbolism",
        "Mobile-first responsive design approach",
        "Iconography and imagery planning"
      ],
      changes: [
        "Changed from modern to traditional design elements",
        "Added sacred symbols and motifs throughout the design",
        "Enhanced visual hierarchy for ritual importance"
      ]
    },
    {
      phase: 3,
      title: "Technical Architecture",
      duration: "2 Days",
      tasks: [
        "Next.js project initialization with SEO optimization",
        "Tailwind CSS configuration with custom traditional colors",
        "Component architecture for ritual services",
        "Performance optimization strategy",
        "Accessibility considerations for all age groups"
      ],
      changes: [
        "Implemented schema.org markup for religious organization",
        "Added fast loading for image-heavy ritual gallery",
        "Integrated WhatsApp API for direct communication"
      ]
    },
    {
      phase: 4,
      title: "Core Development",
      duration: "6 Days",
      tasks: [
        "Header with traditional logo implementation",
        "Hero section with spiritual messaging",
        "Ritual services categorization system",
        "Gallery implementation for Matrugaya Tirth",
        "Booking and inquiry system development"
      ],
      changes: [
        "Added dynamic ritual filtering system",
        "Implemented smooth transitions for better user experience",
        "Enhanced mobile navigation for elderly users"
      ]
    },
    {
      phase: 5,
      title: "Content Integration & Spirituality",
      duration: "3 Days",
      tasks: [
        "Vedic ritual descriptions and procedures",
        "Pandit Tushar Pandya biography integration",
        "Traditional blessing messages implementation",
        "SEO optimization with religious keywords",
        "Multilingual content preparation"
      ],
      changes: [
        "Added detailed ritual explanations with spiritual significance",
        "Implemented client testimonials with authentic experiences",
        "Enhanced trust factors with generational expertise"
      ]
    },
    {
      phase: 6,
      title: "Testing & Spiritual Validation",
      duration: "2 Days",
      tasks: [
        "Cross-browser and device testing",
        "Performance optimization for rural connectivity",
        "Content accuracy verification with religious experts",
        "User experience testing with target audience",
        "Accessibility testing for all age groups"
      ],
      changes: [
        "Improved color contrast for better readability",
        "Optimized image compression without losing quality",
        "Enhanced loading speeds for better user retention"
      ]
    }
  ];

  const technologies = [
    { 
      name: "Next.js", 
      purpose: "React Framework", 
      usage: "SSR for better SEO and performance",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      name: "Tailwind CSS", 
      purpose: "CSS Framework", 
      usage: "Rapid UI development with custom traditional colors",
      icon: <Palette className="w-6 h-6" />
    },
    { 
      name: "React", 
      purpose: "UI Library", 
      usage: "Component-based architecture for reusability",
      icon: <Code className="w-6 h-6" />
    },
    { 
      name: "JavaScript ES6+", 
      purpose: "Programming Language", 
      usage: "Interactive features and form handling",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    {
      feature: "Ritual Service Categorization",
      description: "Organized Vedic rituals into Shraddh Karma, Shanti Karma, and Shubh Karya",
      implementation: "Dynamic filtering system with category-based navigation",
      impact: "75% better user navigation through complex ritual offerings",
      icon: "📿"
    },
    {
      feature: "Spiritual Design System",
      description: "Traditional color scheme and typography reflecting Vedic heritage",
      implementation: "Custom Tailwind config with sacred colors and traditional fonts",
      impact: "Enhanced trust and authenticity perception by 60%",
      icon: "🎨"
    },
    {
      feature: "Matrugaya Tirth Integration",
      description: "Showcasing the holy location and its significance",
      implementation: "Dedicated sections with gallery and location-specific content",
      impact: "Increased inquiries for location-specific rituals by 40%",
      icon: "🕌"
    },
    {
      feature: "Direct Communication",
      description: "Instant WhatsApp integration for ritual bookings",
      implementation: "Click-to-chat WhatsApp API with pre-filled messages",
      impact: "85% faster response time for ritual inquiries",
      icon: "💬"
    }
  ];

  const traditionalColors = [
    { name: "Saffron", hex: "#FF9933", usage: "Primary spiritual color" },
    { name: "Deep Red", hex: "#8B0000", usage: "Traditional ceremonies" },
    { name: "Gold", hex: "#FFD700", usage: "Accents and highlights" },
    { name: "Cream", hex: "#FFFDD0", usage: "Background elements" },
    { name: "Dark Brown", hex: "#5D4037", usage: "Text and borders" }
  ];

  const stats = [
    { value: "20", label: "Days Total", icon: <Clock className="w-6 h-6" /> },
    { value: "6", label: "Phases", icon: <Target className="w-6 h-6" /> },
    { value: "95%", label: "Performance Score", icon: <Zap className="w-6 h-6" /> },
    { value: "50%", label: "Inquiry Increase", icon: <Users className="w-6 h-6" /> }
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
            <span className="text-sm font-normal tracking-wider uppercase">Sacred Development Process</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
            Pandit Tushar
            <span className="block font-extralight italic">Pandya Website</span>
          </h1>
          
          <p className="text-xl font-normal text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sacred Digital Journey: Building Pandit Tushar Pandya's Traditional Religious Services Platform 
            with modern technology while honoring ancient Vedic traditions.
          </p>
        </div>

        {/* Project Stats */}
        <section className="mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-xl text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400 transition-all duration-300">
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
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Sacred Development Timeline</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              A 20-day spiritual digital journey blending traditional values with modern technology, 
              carefully crafted to honor Vedic traditions while delivering exceptional user experience.
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
                      ? 'border-amber-400 bg-amber-400/10 text-white'
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
                <span className="border border-amber-400/30 text-amber-400 px-4 py-2 rounded-full text-sm font-normal bg-amber-400/10">
                  {developmentPhases[activePhase].duration}
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-normal text-white mb-6 text-lg flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    Spiritual Tasks Completed
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
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Key Changes & Spiritual Insights
                  </h4>
                  <ul className="space-y-4">
                    {developmentPhases[activePhase].changes.map((change, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-amber-400/10 border border-amber-400/20 p-1 rounded-full mr-4 mt-1">
                          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Traditional Color Palette */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Traditional Color Palette</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Carefully selected colors reflecting spiritual significance and Vedic traditions, 
              chosen to evoke reverence and cultural authenticity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {traditionalColors.map((color, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-4 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 text-center">
                  <div 
                    className="w-full h-20 rounded-lg mb-3 border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="font-normal text-white mb-1">{color.name}</div>
                  <div className="text-white/70 text-sm font-normal mb-2">{color.hex}</div>
                  <div className="text-white/50 text-xs font-normal">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Technology Stack</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Modern technologies chosen for performance, accessibility, and traditional aesthetic delivery, 
              ensuring the platform honors traditions while embracing innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-xl text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400 transition-all duration-300">
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
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Sacred Features Implementation</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Specialized features designed for traditional religious services and spiritual communication, 
              blending ancient wisdom with modern technology.
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
                    <h4 className="font-normal text-white mb-3">Implementation Approach:</h4>
                    <p className="text-white/70 font-normal leading-relaxed">
                      {feature.implementation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Spiritual Solutions */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Challenges & Spiritual Solutions</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group cursor-default">
              <div className="border border-red-400/20 rounded-xl p-6 bg-red-400/5 backdrop-blur-sm hover:border-red-400/30 transition-all duration-500 h-full">
                <h3 className="text-xl font-normal mb-6 flex items-center gap-3 text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Spiritual Challenges Faced
                </h3>
                <ul className="space-y-4 text-red-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Accurate representation of Vedic rituals and terminology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Balancing traditional aesthetics with modern usability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Building trust for online religious services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Catering to multiple age groups with varying tech literacy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Maintaining spiritual authenticity in digital format</span>
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
                  Devotional Solutions Implemented
                </h3>
                <ul className="space-y-4 text-green-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Extensive research and client collaboration on rituals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Traditional design system with modern UX principles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Generational expertise highlighting and client testimonials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Simplified navigation and large touch targets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Authentic content verified by religious experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-32">
          <div className="border border-white/10 rounded-2xl p-12 bg-gradient-to-br from-amber-600/10 to-red-800/10 backdrop-blur-sm">
            <h2 className="text-4xl font-normal text-center mb-16 tracking-wide">Divine Performance Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-amber-400 transition-colors duration-300">95%</div>
                <p className="text-white/70 font-normal">Performance Score</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-amber-400 transition-colors duration-300">2.1s</div>
                <p className="text-white/70 font-normal">Load Time</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-amber-400 transition-colors duration-300">50%</div>
                <p className="text-white/70 font-normal">Inquiry Increase</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-amber-400 transition-colors duration-300">85%</div>
                <p className="text-white/70 font-normal">Mobile Usage</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-normal mb-6 tracking-wide">Begin Your Digital Spiritual Journey</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to create a digital presence that honors your traditions while embracing modern technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-300 font-medium text-lg">
              Start Spiritual Project
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg">
              Download Process Guide
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevelopmentProcess;