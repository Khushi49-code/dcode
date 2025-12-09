"use client";
import Link from "next/link";


import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import Grid from "@/components/landingPage/Grid";
import AddAI from "@/components/landingPage/AddAI";
import AboutUsSection from "@/components/About/AboutUsSection";
import Services from "@/components/landingPage/Services";
import Servicestwo from "@/components/landingPage/Servicestwo";
import Subscribe from "@/components/landingPage/Subscribe";
import ConnectUsForm from "@/components/landingPage/ConnectUsForm";
import { useEffect, useState } from "react";
import WorkProcessUI from "@/components/landingPage/WorkProcessUI";





// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] // cubic-bezier for easeInOut
    }
  }
};


// Scroll Progress Component
// Scroll Progress Component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-300 to-white origin-left z-50"
      style={{ scaleX }}
    />
  );
};


// Wrapper component for each section
const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      margin: "-50px 0px -50px 0px"
    }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);



  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight / 2;
  //     const sectionElements = sections.map(id => document.getElementById(id));

  //     sectionElements.forEach((element, index) => {
  //       if (element) {
  //         const { offsetTop, offsetHeight } = element;
  //         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
  //           setActiveSection(index);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      <ScrollProgress />

      {/* Hero Section - First to appear */}
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* Grid Section */}
      <SectionWrapper delay={0.1}>
        <Grid />
      </SectionWrapper>

      {/* Add AI Section */}
      <SectionWrapper delay={0.2}>
        <AddAI />
      </SectionWrapper>

      {/* About Us Section */}
      <SectionWrapper delay={0.1}>
        <AboutUsSection />
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper delay={0.1}>
        <Services />
      </SectionWrapper>

      {/* Services Two Section */}
      <SectionWrapper delay={0.1}>
        <Servicestwo />
      </SectionWrapper>

      {/* Subscribe Section */}
      <SectionWrapper delay={0.1}>
        <WorkProcessUI />
      </SectionWrapper>

   

      {/* Connect Us Form - Last section */}
      <SectionWrapper delay={0.2}>
        <ConnectUsForm />
      </SectionWrapper>
    </motion.div>
  );
}