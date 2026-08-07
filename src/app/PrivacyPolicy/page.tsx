"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Cookie, Lock, Eye, User, Database, Mail, Earth } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index: any) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "Privacy Policy | Data Protection & Security | Dcodes Technologies";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Read Dcodes Technologies' privacy policy to understand how we collect, use, and protect your personal information. Your data security is our priority.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "privacy policy, data protection, information security, GDPR compliance, data privacy, Dcodes Technologies privacy, cookie policy");
    
    // Update or create viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0");
    
    // Update or create robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    // Update or create author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', "Dcodes Technologies");
    
    // Update or create theme-color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', "#000000");
    
    // Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', "Privacy Policy | Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Read our privacy policy to understand how we protect and handle your personal information.");
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', "website");
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', "https://dcodes.com/privacy-policy");
    
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', "Dcodes Technologies");
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', "https://dcodes.com/og-image-privacy.jpg");
    
    // Twitter Card Tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', "summary_large_image");
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', "Privacy Policy | Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Our commitment to protecting your privacy and personal information.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-privacy.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/privacy-policy");
    
    // Geo tags
    let geoRegion = document.querySelector('meta[name="geo.region"]');
    if (!geoRegion) {
      geoRegion = document.createElement('meta');
      geoRegion.setAttribute('name', 'geo.region');
      document.head.appendChild(geoRegion);
    }
    geoRegion.setAttribute('content', "IN-GJ");
    
    let geoPlacename = document.querySelector('meta[name="geo.placename"]');
    if (!geoPlacename) {
      geoPlacename = document.createElement('meta');
      geoPlacename.setAttribute('name', 'geo.placename');
      document.head.appendChild(geoPlacename);
    }
    geoPlacename.setAttribute('content', "Gujarat");
    
    // Language
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en");
    
    // Structured Data for Privacy Policy Page
    const structuredDataPrivacy = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Privacy policy and data protection practices of Dcodes Technologies",
      "url": "https://dcodes.com/privacy-policy",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Data Privacy",
        "description": "How we collect, use, and protect personal information"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Thing",
            "name": "Information Collection",
            "description": "Personal and non-personal data collection practices"
          },
          {
            "@type": "Thing",
            "name": "Data Usage",
            "description": "How we use collected information"
          },
          {
            "@type": "Thing",
            "name": "Cookies",
            "description": "Cookie and tracking technology usage"
          },
          {
            "@type": "Thing",
            "name": "Data Security",
            "description": "Security measures to protect your data"
          },
          {
            "@type": "Thing",
            "name": "User Rights",
            "description": "Your rights regarding personal data"
          }
        ]
      }
    };
    
    let scriptPrivacy = document.querySelector('#structured-data-privacy');
    if (!scriptPrivacy) {
      scriptPrivacy = document.createElement('script');
      scriptPrivacy.id = 'structured-data-privacy';
      scriptPrivacy.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptPrivacy);
    }
    scriptPrivacy.textContent = JSON.stringify(structuredDataPrivacy);
    
    // Breadcrumb Structured Data
    const structuredDataBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dcodes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://dcodes.com/privacy-policy"
        }
      ]
    };
    
    let scriptBreadcrumb = document.querySelector('#structured-data-breadcrumb');
    if (!scriptBreadcrumb) {
      scriptBreadcrumb = document.createElement('script');
      scriptBreadcrumb.id = 'structured-data-breadcrumb';
      scriptBreadcrumb.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptBreadcrumb);
    }
    scriptBreadcrumb.textContent = JSON.stringify(structuredDataBreadcrumb);
    
    // Organization Structured Data for legal compliance
    const structuredDataOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dcodes Technologies",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "legalName": "Dcodes Tech Solutions",
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Gujarat"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@dcodestech.com",
        "telephone": "+91-6353-653-977"
      },
      "sameAs": [
        "https://linkedin.com/company/dcodes",
        "https://twitter.com/dcodes"
      ]
    };
    
    let scriptOrg = document.querySelector('#structured-data-org');
    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.id = 'structured-data-org';
      scriptOrg.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptOrg);
    }
    scriptOrg.textContent = JSON.stringify(structuredDataOrg);
    
  }, []);

  const privacySections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: "We gather data that is both personal and non-personal. Your name, phone number, email address, and any other information you give us when registering on our website or contacting us is considered personal information. Usage statistics, browser type, and IP address are examples of non-personal information."
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: "We use your data to answer your questions, deliver, maintain, and enhance our services, and get in touch with you regarding special offers or updates. Non-personal data aids in traffic analysis and helps us enhance the usability and functionality of our website."
    },
    {
      id: 3,
      title: "Cookies & Tracking Technologies",
      icon: <Cookie className="w-5 h-5" />,
      content: "Cookies and other tracking technologies are used by us to enhance your online experience. You may disable cookies by going to your browser's settings, but doing so might make it harder for you to utilize some of our site's services. We may seek the help of outside service providers to help us run our website and offer our services."
    },
    {
      id: 4,
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: "We have strong security measures to guard against unauthorized access, alteration, disclosure, and destruction of your data. We cannot guarantee the complete security of your information because no security system is foolproof, even with our best efforts."
    },
    {
      id: 5,
      title: "Data Retention",
      icon: <Shield className="w-5 h-5" />,
      content: "Unless a longer retention period is mandated or authorized by law, we keep your personal information for as long as it takes us to accomplish the goals specified in this privacy policy."
    },
    {
      id: 6,
      title: "Your Rights",
      icon: <User className="w-5 h-5" />,
      content: "You have permission to obtain, rectify, update, or erase your data. You also have the option to limit or object to how your data is processed."
    }
  ];

  const principles = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparency",
      description: "We are open about what data we collect and how we use it."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security",
      description: "Your data is protected with industry-standard security measures."
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Control",
      description: "You have control over your personal information and how it's used."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Hero Section */}
        <div className="mb-20 mt-12 text-center">
          <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-normal tracking-wider uppercase">Data Protection & Privacy</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-normal mb-8 tracking-tight">
            Privacy
            <span className="block font-extralight italic">Policy</span>
          </h1>
          
          <p className="text-xl font-normal text-white/70 max-w-4xl mx-auto leading-relaxed">
            We value your privacy, and this privacy statement describes how we gather, utilize, and safeguard 
            the data we receive from you when you use our website and services.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-16">
          <div className="border border-white/10 rounded-xl p-8 bg-gray-900/20 backdrop-blur-sm">
            <p className="text-lg font-normal text-white/80 leading-relaxed mb-6">
              You accept this policy by using this website. The information you provide to Dcodes Technologies 
              when using this website is described in this privacy statement. We ask you to supply relevant 
              information that identifies your presence on the website to safeguard and protect your privacy.
            </p>
            <p className="text-lg font-normal text-white/80 leading-relaxed">
              We guarantee that the information you submit will be compliant with the principles stated in this privacy statement.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-normal mb-4 tracking-wide">Our Privacy Principles</h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="group cursor-default">
                <div className="relative p-6 h-full border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-normal group-hover:text-white transition-colors duration-300">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 font-normal leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-normal mb-4 tracking-wide">Privacy Policy Details</h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
          </div>
          
          <div className="space-y-4">
            {privacySections.map((section, index) => (
              <div key={section.id} className="group">
                <div className="relative border border-white/10 rounded-xl bg-gray-900/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-hidden">
                  <button
                    className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleSection(index)}
                    aria-expanded={expandedSection === index}
                    aria-label={`Toggle ${section.title} section`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-normal group-hover:text-white transition-colors duration-300">
                        {section.title}
                      </h3>
                    </div>
                    
                    <div className={`transition-all duration-300 text-gray-400 group-hover:text-blue-400 ${
                      expandedSection === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <div className={`transition-all duration-500 ease-out overflow-hidden ${
                    expandedSection === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}>
                    <div className="px-6">
                      <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
                      <p className="text-gray-300 leading-relaxed font-normal pl-16">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Updates */}
        <div className="mb-16">
          <div className="border border-blue-400/20 rounded-xl p-8 bg-blue-400/5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-normal mb-4 text-white">Policy Updates</h3>
                <p className="text-white/80 font-normal leading-relaxed mb-4">
                  This privacy statement may be updated from time to time. Any updates will be announced on this page, 
                  and we'll let you know about any big changes via our website or other channels.
                </p>
                <p className="text-white/80 font-normal leading-relaxed">
                  You acknowledge that you have read the amended policy when you continue to use our site after any changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <div className="border border-white/10 rounded-xl p-8 bg-gray-900/20 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4 tracking-wide">Questions About Our Privacy Policy?</h3>
              <p className="text-white/70 font-normal mb-6 max-w-2xl mx-auto">
                Please get in touch with us if you have any queries or worries concerning this privacy statement. 
                You confirm that you have read, comprehended, and accepted our privacy policy by using our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="text-center">
                  <Mail className="w-5 h-5 text-blue-400 inline-block mb-2" />
                  <p className="text-white/80 font-normal">
                    <a href="mailto:info@dcodestech.com" className="hover:text-white transition-colors">
                      info@dcodestech.com
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <Earth className="w-5 h-5 text-blue-400 inline-block mb-2" />
                  <p className="text-white/80 font-normal">
                    <a href="https://www.dcodestech.com" className="hover:text-white transition-colors">
                      www.dcodestech.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center">
          <p className="text-white/50 font-normal text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;