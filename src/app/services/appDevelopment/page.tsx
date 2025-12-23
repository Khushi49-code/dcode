"use client";

import { Android } from "@/components/magicui/android";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import LaserFlow from '@/components/ui/LaserFlow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Smartphone, 
  Code, 
  Repeat, 
  Rocket, 
  Zap, 
  User, 
  TrendingUp, 
  Lock, 
  ChevronDown,
  Play,
  Star,
  ArrowRight,
  Check,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Plus,
  Truck,
  BookOpen,
  Heart,
  CreditCard,
  Clock,
  Map,
  Cloud,
  Database,
  Server
} from 'lucide-react'; 
import TestimonialsSection from "./TestimonialsSection";
import {
  SiFlutter,
  SiReact,
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiAwsamplify,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import Link from "next/link";

// SEO મેટા ટેગ્સ માટે Head import
import Head from 'next/head';

// Tech Stack Logos Component
const TechStack = () => {
  const techStack = [
    { name: 'Flutter', color: '#02569B', Icon: SiFlutter },
    { name: 'React Native', color: '#61DAFB', Icon: SiReact },
    { name: 'Firebase', color: '#FFCA28', Icon: SiFirebase },
    { name: 'Kotlin', color: '#7F52FF', Icon: SiKotlin },
    { name: 'Swift', color: '#FA7343', Icon: SiSwift },
    { name: 'AWS Amplify', color: '#FF9900', Icon: SiAwsamplify },
    { name: 'Node.js', color: '#339933', Icon: SiNodedotjs },
    { name: 'MongoDB', color: '#47A248', Icon: SiMongodb },
  ];

  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-b from-gray-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-normal mb-12 text-gray-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          itemProp="name"
        >
          Built With Modern Technologies
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${tech.color}20` }}
                aria-label={`${tech.name} technology logo`}
              >
                <tech.Icon
                  className="text-3xl"
                  style={{ color: tech.color }}
                  aria-hidden="true"
                />
              </div>
              <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors" itemProp="name">
                {tech.name}
              </span>
              <meta itemProp="description" content={`${tech.name} mobile app development technology`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Industry Use Cases Component
const IndustryUseCases = () => {
  const industries = [
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Real-time tracking and inventory management solutions"
    },
    {
      icon: BookOpen,
      title: "EdTech Platforms",
      description: "Interactive learning and classroom management apps"
    },
    {
      icon: Heart,
      title: "Healthcare Solutions",
      description: "Patient care, telemedicine, and health monitoring apps"
    },
    {
      icon: CreditCard,
      title: "Fintech & Wallets",
      description: "Secure payment processing and financial management"
    },
    {
      icon: Clock,
      title: "On-Demand Services",
      description: "Service booking and delivery management platforms"
    },
    {
      icon: Map,
      title: "Travel & Booking Apps",
      description: "Flight, hotel, and experience booking solutions"
    }
  ];

  return (
    <motion.section 
      className="py-10 px-8 border-t border-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
            Industry Solutions
          </Badge>
          <h2 className="text-5xl font-extralight mb-6 tracking-tight" itemProp="name">
            Apps We Build For
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal" itemProp="description">
            Tailored mobile solutions for diverse industry needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Card className="p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 hover:border-cyan-500/30 transition-all duration-300 h-full">
                <div className="flex flex-col items-start">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-normal mb-4 text-white group-hover:text-cyan-300 transition-colors" itemProp="name">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal" itemProp="description">
                    {industry.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Development Process Component
const DevelopmentProcess = () => {
  const processSteps = [
    { step: "Discovery", icon: "🔍", description: "Requirement analysis & planning" },
    { step: "UX/UI Design", icon: "🎨", description: "Wireframing & prototype design" },
    { step: "Development", icon: "⚙️", description: "Agile development & coding" },
    { step: "QA Testing", icon: "🧪", description: "Quality assurance & testing" },
    { step: "App Store Launch", icon: "🚀", description: "Submission & deployment" },
    { step: "Support", icon: "🔧", description: "Maintenance & updates" }
  ];

  return (
    <motion.section 
      className="py-24 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 sm:mb-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight" itemProp="name">
            Our Development Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-normal" itemProp="description">
            A streamlined approach to delivering exceptional mobile applications from concept to launch.
          </p>
        </motion.div>
        
        <div className="relative">
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 hidden lg:block"
            aria-hidden="true" 
          />
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                className={`relative flex flex-col lg:flex-row items-center lg:mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="lg:w-1/2 lg:px-8 w-full">
                  <motion.div 
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-xl transition-all duration-300 text-center ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' 
                    }}
                  >
                    <div className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 mb-4 ${
                        index % 2 === 0 ? 'lg:float-right lg:ml-4' : 'lg:float-left lg:mr-4'
                    }`}>
                      <span className="text-3xl" role="img" aria-label={step.step}>{step.icon}</span>
                    </div>
                    <div className="lg:inline-block">
                      <h3 className="text-2xl font-semibold mb-2 text-white" itemProp="name">{step.step}</h3>
                      <p className="text-gray-400 font-normal" itemProp="text">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-gray-900 ring-4 ring-cyan-500/30" />
                </div>
                
                <div className="lg:w-1/2" /> 
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Key Differentiators Component
const KeyDifferentiators = () => {
  const differentiators = [
    {
      title: "Native & Cross-Platform Expertise",
      description: "Mastery in both native and cross-platform technologies for optimal performance"
    },
    {
      title: "App Store Submission Support",
      description: "End-to-end support from development to successful app store deployment"
    },
    {
      title: "Post-Launch Optimization",
      description: "Continuous improvement and updates based on user feedback and analytics"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols and data protection measures"
    }
  ];

  return (
    <motion.section 
      className="py-32 px-8 border-t border-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extralight mb-6 tracking-tight" itemProp="name">Why Choose Dcodes?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal" itemProp="description">
            Delivering excellence through specialized expertise and proven methodologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div 
              key={item.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <Card className="p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 hover:border-cyan-500/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-normal mb-3 text-white group-hover:text-cyan-300 transition-colors" itemProp="name">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Updated Hero Section with new content
const UpdatedHero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-8 relative"
      style={{ opacity, scale }}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div className="mb-12">
          <motion.div 
            className="text-xs tracking-[0.2em] text-cyan-400 mb-2 pt-10 uppercase font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Build Smarter Apps for a Smarter World
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-extralight mb-12 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            itemProp="headline"
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            >
              Enterprise
            </motion.span>
            <br />
            <motion.span 
              className="font-normal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            >
              Grade Apps
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-normal leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          itemProp="description"
        >
          Enterprise-grade native & cross-platform apps engineered for performance, security, and scale
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button 
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 text-sm tracking-wide uppercase hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,212,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Start your mobile app development project"
          >
            <Link href={'/connect'} className="relative z-10 font-medium" itemProp="url">Start Your Project</Link>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          <motion.button 
            className="text-sm tracking-wide uppercase text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group font-medium"
            whileHover={{ y: -2 }}
            aria-label="View mobile app development case studies"
          >
            <Link href="/case-studies" className="relative z-10">
              View Case Studies
            </Link>
            <motion.span 
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default function EnhancedPremiumAppDev() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const services = [
    {
      id: 1,
      title: "Native iOS Development",
      description: "Pure Swift applications optimized for Apple's ecosystem and App Store excellence",
      number: "01",
      icon: Smartphone,
      color: "#007AFF"
    },
    {
      id: 2,
      title: "Native Android Development", 
      description: "Kotlin-powered applications designed for Google Play success and Android performance",
      number: "02",
      icon: Code,
      color: "#3DDC84"
    },
    {
      id: 3,
      title: "Cross-Platform Solutions",
      description: "React Native & Flutter apps delivering native performance across all platforms",
      number: "03",
      icon: Repeat,
      color: "#61DAFB"
    },
    {
      id: 4,
      title: "App Store Optimization",
      description: "Strategic launch support and continuous optimization for maximum visibility",
      number: "04",
      icon: Rocket,
      color: "#FF6B6B"
    }
  ];

  const capabilities = [
    "Native iOS & Android Development",
    "Intuitive UI/UX Design",
    "Cross-Platform Frameworks (Flutter, React Native)", 
    "API Development & Integration",
    "App Store Optimization & Compliance",
    "Maintenance, Updates & Feature Rollouts",
    "Scalable Cloud-Connected Architecture",
    "CI/CD & DevOps for Mobile"
  ];

  const philosophy = [
    { principle: "Performance", description: "Lightning-fast apps with optimized responsiveness.", icon: "⚡" },
    { principle: "User-Centric", description: "Interfaces that simplify navigation and maximize retention.", icon: "👤" },
    { principle: "Scalability", description: "Built to grow whether 10 or 10 million users.", icon: "📈" },
    { principle: "Security", description: "Enterprise-grade protection for data, users, and compliance.", icon: "🔒" }
  ];

  const faqs = [
    {
      question: "Which platform should I choose for my app?",
      answer: "It depends on your target audience, budget, and performance needs. We'll help you decide between native, cross-platform, or hybrid based on your goals."
    },
    {
      question: "How long does mobile app development take?",
      answer: "Typically between 4-12 weeks depending on app complexity, platform, and feature set."
    },
    {
      question: "Do you handle App Store submissions?",
      answer: "Yes — we handle everything from compliance to submission, and provide support for future updates and releases."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const revealImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Head>
        <title>Mobile App Development Company | Android & iOS Apps – Dcodes</title>
        <meta name="description" content="Leading mobile app development company offering custom Android, iOS, and cross-platform solutions. Build scalable and secure mobile applications for global businesses." />
        <meta name="keywords" content="mobile app development company,android app development services,ios app development services,cross platform app development,hybrid app development company,flutter app development services,react native app development" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Enterprise Grade Mobile App Development | Dcodes" />
        <meta property="og:description" content="Transform your app ideas into scalable digital products with our expert mobile development services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dcodes.com/mobile-app-development" />
        <meta property="og:image" content="https://dcodes.com/og-image-mobile-apps.jpg" />
        <meta property="og:site_name" content="Dcodes Mobile Studio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Mobile App Development | Dcodes" />
        <meta name="twitter:description" content="Expert iOS & Android app development for startups and enterprises." />
        <meta name="twitter:image" content="https://dcodes.com/twitter-card-mobile.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dcodes.com/mobile-app-development" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Dcodes Mobile Studio",
            "description": "Mobile App Development Company specializing in iOS, Android, and cross-platform solutions",
            "url": "https://dcodes.com",
            "logo": "https://dcodes.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Gujarati", "Hindi"]
            },
            "sameAs": [
              "https://linkedin.com/company/dcodes",
              "https://twitter.com/dcodes",
              "https://github.com/dcodes"
            ]
          })}
        </script>
        
        {/* Structured Data for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile App Development",
            "serviceType": "Mobile Application Development",
            "provider": {
              "@type": "Organization",
              "name": "Dcodes"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile App Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Native iOS Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Native Android Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cross-Platform Development"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Dcodes Mobile Studio" />
        <meta name="theme-color" content="#000000" />
        
        {/* Language and Region */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Gujarat" />
      </Head>

      <div className="bg-black text-white min-h-screen font-normal antialiased overflow-x-hidden">
        {/* Animated Background Effects */}
        <div className="fixed inset-0 z-0">
          <div style={{ height: '200vh', position: 'relative', overflow: 'hidden', right: '-300px' }}>
            <LaserFlow color="#5f78d1" />
          </div>
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 z-10"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.1), transparent 50%)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-20" />
        </div>

        <div className="relative z-30">
          {/* Updated Hero Section */}
          <UpdatedHero />

          {/* What We Deliver Section */}
          <motion.section 
            className="py-10  px-8 border-t border-gray-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-extralight mb-6 tracking-tight" itemProp="name">What We Deliver</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal" itemProp="description">
                  We help businesses turn bold app ideas into scalable digital products that users love. Our mobile development services span across platforms, technologies, and industries.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Native Development Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <Card className="p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 h-full">
                    <Smartphone className="w-12 h-12 text-cyan-400 mb-6" aria-hidden="true" />
                    <h3 className="text-2xl font-normal mb-4 text-white" itemProp="name">Native iOS & Android</h3>
                    <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                      Deliver seamless performance with fully native Android and iOS apps. 
                      Built for speed, UX precision, and device-native integration.
                    </p>
                  </Card>
                </motion.div>

                {/* Cross-Platform Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <Card className="p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 h-full">
                    <Repeat className="w-12 h-12 text-blue-400 mb-6" aria-hidden="true" />
                    <h3 className="text-2xl font-normal mb-4 text-white" itemProp="name">Cross-Platform</h3>
                    <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                      Launch faster with Flutter and React Native apps. Code once, run anywhere — 
                      without compromising user experience or functionality.
                    </p>
                  </Card>
                </motion.div>

                {/* Enterprise Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <Card className="p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 h-full">
                    <Server className="w-12 h-12 text-purple-400 mb-6" aria-hidden="true" />
                    <h3 className="text-2xl font-normal mb-4 text-white" itemProp="name">Enterprise Solutions</h3>
                    <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                      Power high-traffic ecosystems with secure, cloud-connected apps optimized 
                      for large-scale deployments and business-critical operations.
                    </p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Add all the new sections */}
          <IndustryUseCases />
          <TechStack />
          <DevelopmentProcess />
          <KeyDifferentiators />

          {/* About Section */}
          <motion.section 
            className="py-32 px-8 border-t border-gray-800/50 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            itemScope
            itemType="https://schema.org/AboutPage"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <motion.div 
                  className="lg:col-span-5"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="outline" className="mb-8 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                    Since 2020
                  </Badge>
                  
                  <motion.h2 
                    className="text-5xl font-extralight mb-12 tracking-tight leading-tight"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    itemProp="headline"
                  >
                    Dcodes<br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Mobile Studio
                    </span>
                  </motion.h2>
                  
                  <div className="space-y-8">
                    {["iOS & Android Expertise", "Cross-Platform Solutions", "App Store Success"].map((item, index) => (
                      <motion.div 
                        key={item}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" aria-hidden="true" />
                        <span className="text-sm tracking-wide text-gray-400 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="lg:col-span-7"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.p 
                    className="text-2xl font-normal text-gray-400 leading-relaxed mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    itemProp="description"
                  >
                    Our development studio combines creativity with cutting-edge engineering. 
                    We craft mobile solutions that not only work but win.
                  </motion.p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((capability, index) => (
                      <motion.div
                        key={index}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                      >
                        <Card className="p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <Check className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true" />
                            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-normal">
                              {capability}
                            </span>
                          </div>
                        </Card>
                      </motion.div>
                    ))}

                    {/* Highlight Box */}
                    <motion.div
                      className="group cursor-pointer w-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: capabilities.length * 0.1 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <Card className="p-6 w-full bg-gradient-to-br from-cyan-900/30 via-cyan-800/10 to-transparent border border-cyan-500/40 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <Star className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="text-left">
                            <h4 className="text-white font-medium mb-1">
                              App Store Ready
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Every app we build meets the latest Apple App Store & Google Play Store guidelines.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="py-32 px-8 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-6xl mx-auto">
              {/* Mobile Slider */}
              <div className="lg:hidden">
                <motion.div
                  className="text-xs tracking-[0.2em] text-cyan-400 mb-8 uppercase font-semibold text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  App Development
                </motion.div>

                <motion.h2
                  className="text-4xl font-extralight mb-8 leading-tight tracking-tight text-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Your App,<br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Our Expertise
                  </span>
                </motion.h2>

                {/* Mobile Slider Container */}
                <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
                  <Android
                    className="h-full rounded-xl shadow-2xl overflow-hidden"
                    videoSrc="https://videos.pexels.com/video-files/14993748/14993748-uhd_1296_2304_30fps.mp4"
                    alt="Mobile app development demonstration video showing app features"
                  />
                </div>

                {/* Mobile Content Slider */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {["High-Speed Performance", "Native-Like UI/UX", "App Store Launch Support", "Real-Time Data Integration", "Security-First Architecture"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        whileHover={{ scale: 1.4 }}
                        aria-hidden="true"
                      />
                      <span className="text-gray-300 text-sm font-medium tracking-wide">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-gray-400 text-base font-normal leading-relaxed mt-8 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  We design and develop apps that are user-focused, high-performing, and built for market success.
                </motion.p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <motion.div
                  className="lg:col-span-5"
                  initial={{ x: -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="text-xs tracking-[0.2em] text-cyan-400 mb-8 uppercase font-semibold">
                    App Development
                  </div>

                  <motion.h2
                    className="text-5xl md:text-6xl font-extralight mb-12 leading-tight tracking-tight"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Your App,<br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                      Our Expertise
                    </span>
                  </motion.h2>

                  <div className="space-y-6">
                    {["High-Speed Performance", "Native-Like UI/UX", "App Store Launch Support", "Real-Time Data Integration", "Security-First Architecture"].map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          whileHover={{ scale: 1.4 }}
                          aria-hidden="true"
                        />
                        <span className="text-gray-300 text-sm font-medium tracking-wide">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="lg:col-span-7 flex flex-col justify-center"
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed mb-12"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    We design and develop apps that are user-focused, high-performing, and built for market success.
                  </motion.p>

                  <div className="relative w-full flex h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                    <Android
                      className="h-[60vh] rounded-xl shadow-2xl overflow-hidden"
                      videoSrc="https://videos.pexels.com/video-files/14993748/14993748-uhd_1296_2304_30fps.mp4"
                      alt="Mobile app development platform demonstration showing cross-platform capabilities"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Philosophy Section */}
          <motion.section 
            className="py-32 px-8 border-t border-gray-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-24"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-extralight mb-6 tracking-tight" itemProp="name">Built on These 4 Pillars</h2>
                <motion.div 
                  className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {philosophy.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Thing"
                  >
                    <div className="mb-8">
                      <motion.div 
                        className="w-px h-16 bg-gradient-to-b from-cyan-400 to-blue-500 mx-auto group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors duration-500"
                        whileHover={{ scaleY: 1.2 }}
                        aria-hidden="true"
                      />
                    </div>
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-normal mb-4 group-hover:text-cyan-300 transition-colors duration-300" itemProp="name">
                      {item.principle}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-normal group-hover:text-gray-300 transition-colors duration-300" itemProp="description">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="py-32 px-8 border-t border-gray-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Launch?</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 mb-16 font-normal leading-relaxed max-w-2xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                From startup MVPs to enterprise platforms we turn your app vision into scalable success.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 text-sm tracking-wide uppercase hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 font-medium rounded-sm relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(0,212,255,0.4)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Contact us for mobile app development services"
                >
                  <Link href="/contact" className="relative z-10">CONNECT US</Link>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                
                <motion.button 
                  className="border border-gray-700 hover:border-cyan-500 px-12 py-4 text-sm tracking-wide uppercase transition-all duration-300 font-medium rounded-sm relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#00D4FF",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View mobile app development portfolio and examples"
                >
                  <Link href="/Product/chopada" className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">View App Examples</Link>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="text-xs tracking-wide text-gray-500 uppercase font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-cyan-400">iOS & Android Specialists</span> • Free Consultation Available
              </motion.div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            className="py-32 px-8 border-t border-gray-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-24"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-extralight mb-6 tracking-tight">Frequently Asked</h2>
                <motion.div 
                  className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gradient-to-r from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <motion.button
                      className="w-full text-left p-8 hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-between group"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      whileHover={{ backgroundColor: "rgba(17, 24, 39, 0.5)" }}
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <h3 className="text-lg font-normal pr-8 group-hover:text-cyan-300 transition-colors duration-300" itemProp="name">
                        {faq.question}
                      </h3>
                      <motion.span 
                        className={`text-2xl font-extralight transition-all duration-300 ${
                          openFaq === index ? 'text-cyan-400' : 'text-gray-500'
                        }`}
                        animate={{ 
                          rotate: openFaq === index ? 45 : 0,
                          scale: openFaq === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        aria-hidden="true"
                      >
                        +
                      </motion.span>
                    </motion.button>
                    
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                          id={`faq-answer-${index}`}
                          itemScope
                          itemType="https://schema.org/Answer"
                          itemProp="acceptedAnswer"
                        >
                          <motion.div 
                            className="px-8 pb-8 border-t border-gray-800/30"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            itemProp="text"
                          >
                            <p className="text-gray-300 leading-relaxed font-normal pt-6">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}