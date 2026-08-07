"use client"
import React, { useState } from 'react';
import { ChevronDown, Calendar, Code, Palette, TestTube, Zap, Check, ArrowRight, Clock, Users, Target, Stethoscope, Heart, Star, Award } from 'lucide-react';
import Link from 'next/link';
import { SiJavascript } from 'react-icons/si';

const DevelopmentProcess = () => {
  const [activePhase, setActivePhase] = useState(0);

  const developmentPhases = [
    {
      phase: 1,
      title: "Medical Research & Patient Analysis",
      duration: "5 Days",
      tasks: [
        "Deep dive into gastroenterology medical terminology",
        "Patient journey mapping and consultation process analysis",
        "Medical compliance and healthcare regulations review",
        "Competitor analysis of medical professional websites",
        "Content structure planning for medical services"
      ],
      changes: [
        "Added comprehensive cancer treatment service categories",
        "Integrated OPD schedule management system",
        "Implemented medical credential verification system"
      ]
    },
    {
      phase: 2,
      title: "Healthcare Design System",
      duration: "6 Days",
      tasks: [
        "Medical color palette creation (blues, whites, professional tones)",
        "Healthcare-focused typography selection",
        "Trust-building component design",
        "Mobile-responsive design for patient accessibility",
        "Medical imagery and iconography planning"
      ],
      changes: [
        "Changed to medical professional design aesthetic",
        "Added trust indicators and credential displays",
        "Enhanced visual hierarchy for emergency contact information"
      ]
    },
    {
      phase: 3,
      title: "Medical Technical Architecture",
      duration: "4 Days",
      tasks: [
        "Next.js project initialization with medical SEO optimization",
        "Tailwind CSS configuration with healthcare colors",
        "Component architecture for patient services",
        "Performance optimization for medical content",
        "HIPAA-compliant contact form implementation"
      ],
      changes: [
        "Implemented schema.org markup for medical professional",
        "Added appointment booking system integration",
        "Integrated secure contact forms for patient inquiries"
      ]
    },
    {
      phase: 4,
      title: "Core Medical Development",
      duration: "8 Days",
      tasks: [
        "Header with medical branding implementation",
        "Hero section with doctor introduction and credentials",
        "Medical services and specialization sections",
        "Patient review and testimonial system",
        "OPD schedule and location management"
      ],
      changes: [
        "Added dynamic service filtering for different cancer treatments",
        "Implemented Google Reviews integration",
        "Enhanced mobile experience for patient accessibility"
      ]
    },
    {
      phase: 5,
      title: "Medical Content Integration",
      duration: "5 Days",
      tasks: [
        "Doctor credentials and experience integration",
        "Medical service descriptions and procedures",
        "Patient education content and blog integration",
        "SEO optimization with medical keywords",
        "Trust-building elements implementation"
      ],
      changes: [
        "Added detailed surgical procedure explanations",
        "Implemented patient success stories",
        "Enhanced medical credibility with certification displays"
      ]
    },
    {
      phase: 6,
      title: "Healthcare Compliance Testing",
      duration: "4 Days",
      tasks: [
        "Medical content accuracy verification",
        "Accessibility testing for patients with disabilities",
        "Performance optimization for emergency access",
        "Mobile testing for patient communication",
        "Security and privacy compliance checks"
      ],
      changes: [
        "Improved color contrast for better readability",
        "Optimized loading speeds for critical information",
        "Enhanced form security for patient data protection"
      ]
    }
  ];

  const technologies = [
    { 
      name: "Next.js", 
      purpose: "React Framework", 
      usage: "SSR for medical SEO and fast loading",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      name: "Tailwind CSS", 
      purpose: "CSS Framework", 
      usage: "Professional healthcare design system",
      icon: <Palette className="w-6 h-6" />
    },
    { 
      name: "React", 
      purpose: "UI Library", 
      usage: "Interactive patient service components",
      icon: <Code className="w-6 h-6" />
    },
    { 
      name: "JavaScript ES6+", 
      purpose: "Programming Language", 
      usage: "Patient forms and appointment system",
      icon: <SiJavascript className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    {
      feature: "Medical Service Catalog",
      description: "Comprehensive display of gastroenterology services and cancer treatments",
      implementation: "Dynamic service categorization with detailed procedure information",
      impact: "45% increase in patient service inquiries",
      icon: "🏥"
    },
    {
      feature: "Patient Review System",
      description: "Integrated Google Reviews with patient testimonials",
      implementation: "Real-time review display with rating aggregation",
      impact: "Enhanced trust with 4.9/5 average rating display",
      icon: "⭐"
    },
    {
      feature: "OPD Schedule Management",
      description: "Multi-location OPD schedule with timing details",
      implementation: "Dynamic schedule system with location-based filtering",
      impact: "30% more appointment bookings through website",
      icon: "📅"
    },
    {
      feature: "Medical Blog Integration",
      description: "Patient education content and medical insights",
      implementation: "SEO-optimized blog with medical content strategy",
      impact: "60% increase in patient education engagement",
      icon: "📚"
    }
  ];

  const medicalColors = [
    { name: "Doctor Blue", hex: "#1E40AF", usage: "Primary medical brand color" },
    { name: "Trust White", hex: "#FFFFFF", usage: "Clean medical background" },
    { name: "Professional Navy", hex: "#1E3A8A", usage: "Credentials and important information" },
    { name: "Emergency Red", hex: "#DC2626", usage: "Contact and emergency elements" },
    { name: "Healing Green", hex: "#059669", usage: "Success and positive outcomes" }
  ];

  const medicalMetrics = [
    { metric: "Years Experience", value: "12+", description: "Medical practice experience", icon: <Award className="w-6 h-6" /> },
    { metric: "Patients Treated", value: "6,500+", description: "Successful patient treatments", icon: <Users className="w-6 h-6" /> },
    { metric: "Surgeries Performed", value: "999+", description: "Surgical procedures completed", icon: <Stethoscope className="w-6 h-6" /> },
    { metric: "Google Reviews", value: "4.9/5", description: "Patient satisfaction rating", icon: <Star className="w-6 h-6" /> }
  ];

  const medicalServices = [
    "Colon Cancer Treatment",
    "Rectal Cancer Surgery",
    "Esophageal Cancer Care",
    "Gallbladder Cancer",
    "Stomach Cancer Treatment",
    "Pancreatic Cancer Surgery",
    "Liver Cancer Care",
    "Hernia Surgery",
    "Fistula Surgery",
    "Hemorrhoid Surgery",
    "Robotic Surgery",
    "Laparoscopic Surgery"
  ];

  const stats = [
    { value: "32", label: "Days Total", icon: <Clock className="w-6 h-6" /> },
    { value: "6", label: "Phases", icon: <Target className="w-6 h-6" /> },
    { value: "94%", label: "Performance Score", icon: <Zap className="w-6 h-6" /> },
    { value: "45%", label: "Appointment Increase", icon: <Calendar className="w-6 h-6" /> }
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
            <span className="text-sm font-normal tracking-wider uppercase">Medical Development Process</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
            Dr. Mayank Gurjar
            <span className="block font-extralight italic">Medical Platform</span>
          </h1>
          
          <p className="text-xl font-normal text-white/70 max-w-3xl mx-auto leading-relaxed">
            Healing Through Technology: Building Dr. Mayank Gurjar's Medical Practice Platform 
            with healthcare-focused design and patient-centered functionality.
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

        {/* Medical Metrics */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Practice Scale & Impact</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Celebrating years of medical excellence and patient trust through comprehensive 
              gastroenterology care and surgical expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalMetrics.map((item, index) => (
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
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Development Timeline</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              A 32-day comprehensive development process designed for healthcare professional requirements, 
              ensuring medical accuracy and patient accessibility.
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
                    Medical Tasks Completed
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
                    <Stethoscope className="w-5 h-5 text-purple-400" />
                    Healthcare Adaptations
                  </h4>
                  <ul className="space-y-4">
                    {developmentPhases[activePhase].changes.map((change, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-purple-400/10 border border-purple-400/20 p-1 rounded-full mr-4 mt-1">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Medical Color Palette */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Color Palette</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Professional color selection reflecting medical trust, cleanliness, emergency readiness, 
              and healing outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {medicalColors.map((color, index) => (
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

        {/* Medical Services */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Services Implemented</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Comprehensive gastroenterology services and advanced surgical procedures featured on the platform, 
              showcasing specialized medical expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {medicalServices.map((service, index) => (
              <div key={index} className="group cursor-default">
                <div className="border border-white/10 rounded-lg p-4 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 text-center">
                  <div className="text-white font-normal text-sm group-hover:text-blue-400 transition-colors duration-300">
                    {service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Technology Stack</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Secure and reliable technologies chosen for healthcare professional requirements, 
              ensuring patient data protection and medical content accuracy.
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
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Features Implementation</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Specialized features designed for healthcare professionals and patient communication, 
              focusing on trust-building and medical credibility.
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
                    <h4 className="font-normal text-white mb-3">Medical Implementation:</h4>
                    <p className="text-white/70 font-normal leading-relaxed">
                      {feature.implementation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Challenges & Solutions */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Medical Challenges & Healthcare Solutions</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group cursor-default">
              <div className="border border-red-400/20 rounded-xl p-6 bg-red-400/5 backdrop-blur-sm hover:border-red-400/30 transition-all duration-500 h-full">
                <h3 className="text-xl font-normal mb-6 flex items-center gap-3 text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Healthcare Challenges
                </h3>
                <ul className="space-y-4 text-red-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Accurate medical terminology and procedure descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Building patient trust through digital platform</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Managing multiple OPD locations and schedules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Emergency contact accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                    <span>Medical credential verification and display</span>
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
                  Healthcare Solutions
                </h3>
                <ul className="space-y-4 text-green-300/80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Medical expert-reviewed content and terminology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Trust-building elements with reviews and credentials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Dynamic OPD schedule with location management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Prominent emergency contact display</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <span>Comprehensive credential and certification showcase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-32">
          <div className="border border-white/10 rounded-2xl p-12 bg-gradient-to-br from-blue-600/10 to-blue-800/10 backdrop-blur-sm">
            <h2 className="text-4xl font-normal text-center mb-16 tracking-wide">Medical Performance Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">94%</div>
                <p className="text-white/70 font-normal">Performance Score</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">1.9s</div>
                <p className="text-white/70 font-normal">Load Time</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">45%</div>
                <p className="text-white/70 font-normal">Appointment Increase</p>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl font-normal mb-4 group-hover:text-blue-400 transition-colors duration-300">82%</div>
                <p className="text-white/70 font-normal">Mobile Patient Access</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-normal mb-6 tracking-wide">Start Your Medical Digital Presence</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to build a healthcare platform that enhances patient trust and medical practice growth?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg">
              Start Medical Project
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg">
              Download Healthcare Case Study
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevelopmentProcess;