"use client"
import React, { useState } from 'react';
import { ChevronDown, Calendar, Code, Palette, TestTube, Zap, Check, ArrowRight, Clock, Users, Target, Factory, Database, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

const DevelopmentProcess = () => {
  const [activePhase, setActivePhase] = useState(0);

  const developmentPhases = [
    {
      phase: 1,
      title: "Industrial Research & Analysis",
      duration: "4 Days",
      tasks: [
        "Deep dive into industrial bleaching earth manufacturing",
        "Client consultation for technical specifications",
        "Competitor analysis in industrial chemicals sector",
        "Project scope definition for B2B industrial platform",
        "Technical documentation review and organization"
      ],
      changes: [
        "Added comprehensive product technical specifications",
        "Integrated industrial application use cases",
        "Implemented B2B lead generation system"
      ]
    },
    {
      phase: 2,
      title: "Industrial Design System",
      duration: "5 Days",
      tasks: [
        "Industrial color palette creation (blues, greens, earth tones)",
        "Typography selection reflecting industrial reliability",
        "Component design with technical aesthetics",
        "Mobile-responsive design for industrial professionals",
        "Data visualization for technical specifications"
      ],
      changes: [
        "Changed from consumer to industrial design approach",
        "Added technical data tables and specifications",
        "Enhanced visual hierarchy for product features"
      ]
    },
    {
      phase: 3,
      title: "Technical Architecture",
      duration: "3 Days",
      tasks: [
        "Next.js project initialization with industrial SEO",
        "Tailwind CSS configuration with industrial colors",
        "Component architecture for product catalog",
        "Performance optimization for technical documents",
        "B2B contact and inquiry system planning"
      ],
      changes: [
        "Implemented schema.org markup for industrial business",
        "Added PDF brochure download functionality",
        "Integrated multi-channel contact system"
      ]
    },
    {
      phase: 4,
      title: "Core Industrial Development",
      duration: "7 Days",
      tasks: [
        "Header with industrial branding implementation",
        "Hero section with industrial value proposition",
        "Product catalog with technical specifications",
        "Quality control section development",
        "Dealership inquiry system implementation"
      ],
      changes: [
        "Added dynamic product comparison features",
        "Implemented technical specification filtering",
        "Enhanced mobile experience for field professionals"
      ]
    },
    {
      phase: 5,
      title: "Technical Content Integration",
      duration: "4 Days",
      tasks: [
        "Industrial product descriptions and applications",
        "Technical specifications and quality standards",
        "Manufacturing process documentation",
        "SEO optimization with industrial keywords",
        "Brochure and technical document integration"
      ],
      changes: [
        "Added detailed application case studies",
        "Implemented client testimonials with industry credibility",
        "Enhanced trust factors with quality certifications"
      ]
    },
    {
      phase: 6,
      title: "Industrial Testing & Optimization",
      duration: "3 Days",
      tasks: [
        "Cross-browser testing for industrial software",
        "Performance optimization for global access",
        "Technical content accuracy verification",
        "B2B user experience testing",
        "Mobile optimization for industrial professionals"
      ],
      changes: [
        "Improved data table responsiveness",
        "Optimized document download speeds",
        "Enhanced form submission for B2B inquiries"
      ]
    }
  ];

  const technologies = [
    { 
      name: "Next.js", 
      purpose: "React Framework", 
      usage: "SSR for industrial SEO and global performance",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      name: "Tailwind CSS", 
      purpose: "CSS Framework", 
      usage: "Rapid UI development with industrial design system",
      icon: <Palette className="w-6 h-6" />
    },
    { 
      name: "React", 
      purpose: "UI Library", 
      usage: "Component-based architecture for complex product displays",
      icon: <Code className="w-6 h-6" />
    },
    { 
      name: "JavaScript ES6+", 
      purpose: "Programming Language", 
      usage: "Interactive product catalogs and forms",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    {
      feature: "Industrial Product Catalog",
      description: "Comprehensive display of Activated Bleaching Earth and Fuller's Earth with technical specs",
      implementation: "Dynamic product filtering with technical specification tables",
      impact: "65% increase in qualified B2B inquiries",
      icon: "🏭"
    },
    {
      feature: "Technical Documentation System",
      description: "Integrated brochures and technical documents for industrial clients",
      implementation: "PDF viewer and download system with progressive loading",
      impact: "40% more document downloads and technical engagement",
      icon: "📊"
    },
    {
      feature: "B2B Lead Generation",
      description: "Structured inquiry forms for dealership and bulk orders",
      implementation: "Multi-step forms with industry-specific fields",
      impact: "55% higher conversion rate for industrial clients",
      icon: "🎯"
    },
    {
      feature: "Quality Assurance Showcase",
      description: "Detailed quality control processes and certifications display",
      implementation: "Visual process flow with certification badges",
      impact: "Enhanced trust and credibility in industrial market",
      icon: "⭐"
    }
  ];

  const industrialColors = [
    { name: "Industrial Blue", hex: "#1E3A8A", usage: "Primary brand color" },
    { name: "Earth Green", hex: "#065F46", usage: "Sustainability emphasis" },
    { name: "Technical Gray", hex: "#374151", usage: "Technical content" },
    { name: "Safety Orange", hex: "#EA580C", usage: "CTAs and important elements" },
    { name: "Pure White", hex: "#FFFFFF", usage: "Background and clean design" }
  ];

  const industrialMetrics = [
    { metric: "Product Categories", value: "2", description: "Activated Bleaching Earth & Fuller's Earth", icon: <Factory className="w-6 h-6" /> },
    { metric: "Technical Documents", value: "15+", description: "Brochures and specifications", icon: <FileText className="w-6 h-6" /> },
    { metric: "Quality Checks", value: "12", description: "Rigorous quality control processes", icon: <Check className="w-6 h-6" /> },
    { metric: "Global Reach", value: "10+", description: "Countries served", icon: <Globe className="w-6 h-6" /> }
  ];

  const stats = [
    { value: "26", label: "Days Total", icon: <Clock className="w-6 h-6" /> },
    { value: "6", label: "Phases", icon: <Target className="w-6 h-6" /> },
    { value: "92%", label: "Performance Score", icon: <Zap className="w-6 h-6" /> },
    { value: "65%", label: "Inquiry Increase", icon: <Users className="w-6 h-6" /> }
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
            <span className="text-sm font-normal tracking-wider uppercase">Industrial Development Process</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
            AARYA EARTH
            <span className="block font-extralight italic">Industrial Platform</span>
          </h1>
          
          <p className="text-xl font-normal text-white/70 max-w-3xl mx-auto leading-relaxed">
            Engineering Digital Excellence: Building AARYA EARTH's Industrial Products Platform 
            with robust technology and industrial-grade performance standards.
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

        {/* Industrial Metrics */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Project Scale & Industrial Impact</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Comprehensive industrial platform serving global clients with high-quality Activated Bleaching Earth and Fuller's Earth products.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industrialMetrics.map((item, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-xl text-green-400 group-hover:bg-green-400/10 group-hover:border-green-400 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-normal mb-2 group-hover:text-white transition-colors duration-300">
                    {item.value}
                  </div>
                  <div className="text-white font-normal mb-2">{item.metric}</div>
                  <div className="text-white/70 text-sm font-normal">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Industrial Development Timeline</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              A 26-day structured development process tailored for industrial B2B requirements, 
              ensuring robust performance and technical excellence.
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
                    Technical Tasks Completed
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
                    <Zap className="w-5 h-5 text-orange-400" />
                    Industrial Adaptations
                  </h4>
                  <ul className="space-y-4">
                    {developmentPhases[activePhase].changes.map((change, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-orange-400/10 border border-orange-400/20 p-1 rounded-full mr-4 mt-1">
                          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Industrial Color Palette */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Industrial Color Palette</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Strategic color selection reflecting industrial reliability, environmental commitment, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industrialColors.map((color, index) => (
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
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Industrial Technology Stack</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Robust technologies chosen for performance, scalability, and industrial requirements, 
              ensuring enterprise-grade reliability and global accessibility.
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
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Industrial Features Implementation</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Specialized features designed for industrial B2B requirements and technical specifications, 
              delivering enterprise-grade functionality and user experience.
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
                    <h4 className="font-normal text-white mb-3">Technical Implementation:</h4>
                    <p className="text-white/70 font-normal leading-relaxed">
                      {feature.implementation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industrial Challenges & Solutions */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Industrial Challenges & Technical Solutions</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group cursor-default">
              <div className="border border-red-400/20 rounded-xl p-6 bg-red-400/5 backdrop-blur-sm hover:border-red-400/30 transition-all duration-500 h-full">
                <h3 className="text-xl font-normal mb-6 flex items-center gap-3 text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Industrial Challenges
                </h3>
                <ul className="space-y-4 text-red-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Complex technical specifications presentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>B2B lead qualification and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Document management for technical brochures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Mobile experience for industrial field professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Global performance with large technical documents</span>
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
                  Technical Solutions
                </h3>
                <ul className="space-y-4 text-green-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Interactive specification tables with filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Multi-step forms with industry-specific qualification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Optimized PDF delivery with progressive loading</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Mobile-first design with touch-optimized interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Advanced caching and CDN implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-32">
          <div className="border border-white/10 rounded-2xl p-12 bg-gradient-to-br from-blue-600/10 to-green-700/10 backdrop-blur-sm">
            <h2 className="text-4xl font-normal text-center mb-16 tracking-wide">Industrial Performance Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">92%</div>
                <p className="text-white/70 font-normal">Performance Score</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">2.3s</div>
                <p className="text-white/70 font-normal">Load Time</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">65%</div>
                <p className="text-white/70 font-normal">Inquiry Increase</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">78%</div>
                <p className="text-white/70 font-normal">Mobile Engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-normal mb-6 tracking-wide">Start Your Industrial Digital Transformation</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to build a digital platform that drives industrial growth and technical excellence?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg">
              Start Industrial Project
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg">
              Download Case Study
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevelopmentProcess;