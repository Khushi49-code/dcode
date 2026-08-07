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
      ease: [0.42, 0, 0.58, 1] 
    }
  }
};

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

// ============================================
// SCHEMA MARKUP COMPONENTS
// ============================================

// 1. Organization Schema
const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dcodes Technologies",
    "url": "https://www.dcodestech.com",
    "logo": "https://www.dcodestech.com/logo.png",
    "description": "Web development, mobile app development, ERP solutions and digital marketing company in Ahmedabad, India",
    "email": "info@dcodes.com",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN",
      "postalCode": "380001",
      "streetAddress": "Your Office Street Address"
    },
    "sameAs": [
      "https://www.linkedin.com/company/dcodestech",
      "https://twitter.com/dcodestech",
      "https://github.com/dcodestech"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 2. LocalBusiness Schema
const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dcodestech.com/#localbusiness",
    "name": "Dcodes Technologies",
    "image": "https://www.dcodestech.com/og-image.jpg",
    "description": "Web development, mobile app development, ERP solutions and digital marketing company in Ahmedabad, India",
    "priceRange": "$$",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@dcodes.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Office Street Address",
      "addressLocality": "Ahmedabad",
      "addressRegion": "GJ",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "url": "https://www.dcodestech.com",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 3. Website Schema with Sitelinks Searchbox
const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dcodes Technologies",
    "url": "https://www.dcodestech.com",
    "description": "Web development, mobile app development, ERP solutions and digital marketing company in Ahmedabad, India",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.dcodestech.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 4. BreadcrumbList Schema
const BreadcrumbSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.dcodestech.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 5. FAQ Schema for Homepage (Common Questions)
const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Dcodes Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dcodes Technologies offers web development, mobile app development, ERP solutions, digital marketing, SEO, PPC, social media marketing, and IT consulting services."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Dcodes Technologies located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dcodes Technologies is located in Ahmedabad, Gujarat, India. We serve clients globally with a focus on USA, UK, Australia, Canada, and UAE markets."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web development costs in India typically range from INR 25,000 to INR 5,00,000 depending on project complexity. For international clients, pricing starts at $25/hour."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 90-day post-launch support and ongoing maintenance packages for all our web and app development projects."
        }
      },
      {
        "@type": "Question",
        "name": "Is Dcodes Technologies a Google Partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dcodes Technologies is a certified Google Partner and Meta Certified agency for digital marketing services."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Main Schema Component - Includes all schemas for homepage
const AllSchemas = () => {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <BreadcrumbSchema />
      <FAQSchema />
    </>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

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
    <>
      {/* All Schema Markup Added Here */}
      <AllSchemas />

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
    </>
  );
}