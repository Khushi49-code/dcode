"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, FileText, Shield, AlertTriangle, Link, User, Scale, Mail, Glasses, Phone, Earth } from 'lucide-react';

const TermsAndConditionsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index: any) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "Terms & Conditions | Legal Agreement | Dcodes Technologies";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Read Dcodes Technologies' Terms & Conditions governing website usage, intellectual property, user accounts, liability limitations, and legal agreements for our digital services.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "terms and conditions, website terms of use, legal agreement, intellectual property rights, user account terms, liability disclaimer, governing law, Dcodes Technologies legal");
    
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
    ogTitle.setAttribute('content', "Terms & Conditions | Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Legal terms governing the use of Dcodes Technologies website and services.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/terms-and-conditions");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-terms.jpg");
    
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
    twitterTitle.setAttribute('content', "Terms & Conditions | Dcodes");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Legal terms for using Dcodes Technologies website and services.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-terms.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/terms-and-conditions");
    
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
    
    // Structured Data for Terms and Conditions Page
    const structuredDataTerms = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions",
      "description": "Legal terms and conditions governing the use of Dcodes Technologies website and services",
      "url": "https://dcodes.com/terms-and-conditions",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Legal Agreement",
        "description": "Terms of use for website and services"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Thing",
            "name": "Intellectual Property",
            "description": "Copyright and intellectual property protection"
          },
          {
            "@type": "Thing",
            "name": "User Accounts & Security",
            "description": "Account security and user responsibilities"
          },
          {
            "@type": "Thing",
            "name": "Limitation of Liability",
            "description": "Liability disclaimers"
          },
          {
            "@type": "Thing",
            "name": "Governing Law",
            "description": "Applicable laws and jurisdiction"
          }
        ]
      }
    };
    
    let scriptTerms = document.querySelector('#structured-data-terms');
    if (!scriptTerms) {
      scriptTerms = document.createElement('script');
      scriptTerms.id = 'structured-data-terms';
      scriptTerms.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTerms);
    }
    scriptTerms.textContent = JSON.stringify(structuredDataTerms);
    
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
          "name": "Terms & Conditions",
          "item": "https://dcodes.com/terms-and-conditions"
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
    
    // Organization Structured Data
    const structuredDataOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dcodes Technologies",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "legalName": "Dcodes Tech Solutions",
      "foundingDate": "2019",
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

  const termsSections = [
    {
      id: 1,
      title: "Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: "The information, images, logos, and software on this website are all the property of Dcodes Technologies and are protected from infringement by intellectual property laws. Any usage of content without permission is strictly forbidden. You pledge to use our website solely for legitimate purposes and refrain from any action that could impair, interfere with, or damage our website's or our services' ability to function."
    },
    {
      id: 2,
      title: "User Accounts & Security",
      icon: <User className="w-5 h-5" />,
      content: "If you register for an account on our website, you are in charge of protecting the privacy of your login information and are accountable for all actions taken using your account. You commit to alerting us right away to any unauthorized use of your account or security breach. If you don't fulfill these obligations, Dcodes Technologies won't be responsible for any losses or damages."
    },
    {
      id: 3,
      title: "Limitation of Liability",
      icon: <Shield className="w-5 h-5" />,
      content: "When you use our website or services, Dcodes Technologies disclaims all liability for any damages—direct, indirect, incidental, or consequential. Regarding the veracity, completeness, or correctness of any content on our website, we make no guarantees, either stated or implied."
    },
    {
      id: 4,
      title: "External Links",
      icon: <Link className="w-5 h-5" />,
      content: "Links to external websites may be found on our website. These links are simply offered for your convenience; Dcodes Technologies makes no representations or endorsements regarding the policies or content of these websites. It is your responsibility to use third-party links, and we advise you to read the terms and privacy policies of these websites."
    },
    {
      id: 5,
      title: "Termination",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: "If you break these terms and conditions, we reserve the right to suspend or terminate your access to our website and services. Such a suspension or termination may take place without warning."
    },
    {
      id: 6,
      title: "Governing Law",
      icon: <Scale className="w-5 h-5" />,
      content: "The laws of the jurisdiction in which Dcodes Technologies works will control and be applied to the interpretation of these Terms and Conditions. If a dispute arises about these terms or your use of our website, you consent to the exclusive jurisdiction of the courts in that jurisdiction."
    }
  ];

  const importantPoints = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Acceptance Required",
      description: "You must accept these terms to use our website and services"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Legal Agreement",
      description: "These terms form a binding legal agreement between you and Dcodes Technologies"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Stay Updated",
      description: "We may update these terms periodically - please check back regularly"
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
            <span className="text-sm font-normal tracking-wider uppercase">Legal Agreement</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-normal mb-8 tracking-tight">
            Terms &
            <span className="block font-extralight italic">Conditions</span>
          </h1>
          
          <p className="text-xl font-normal text-white/70 max-w-4xl mx-auto leading-relaxed">
            You accept the risk of adhering to and being governed by these Terms and Conditions by accessing 
            or using our website and services. Before using our website, read them carefully.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="mb-16">
          <div className="border border-orange-400/30 rounded-xl p-8 bg-orange-400/5 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-normal mb-4 text-white">Important Notice</h3>
                <p className="text-white/80 font-normal leading-relaxed">
                  Please stop using our site if any of these conditions are unacceptable. By continuing to use 
                  our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-normal mb-4 tracking-wide">Key Points</h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importantPoints.map((point, index) => (
              <div key={index} className="group cursor-default">
                <div className="relative p-6 h-full border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-normal group-hover:text-white transition-colors duration-300">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 font-normal leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms Sections */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-normal mb-4 tracking-wide">Terms & Conditions</h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
            <p className="text-gray-400 font-normal leading-relaxed max-w-2xl">
              Detailed terms governing your use of our website and services.
            </p>
          </div>
          
          <div className="space-y-4">
            {termsSections.map((section, index) => (
              <div key={section.id} className="group">
                <div className="relative border border-white/10 rounded-xl bg-gray-900/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-hidden">
                  <button
                    className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleSection(index)}
                    aria-expanded={expandedSection === index}
                    aria-controls={`terms-section-${index}`}
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

        {/* Agreement Section */}
        <div className="mb-16">
          <div className="border border-white/20 rounded-xl p-8 bg-gray-900/30 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4 tracking-wide">Your Agreement</h3>
              <p className="text-white/80 font-normal mb-6 max-w-2xl mx-auto leading-relaxed">
                You agree that you have read, comprehended, and are in agreement with these Terms & Conditions by using our website. 
                We appreciate your interest in Dcodes Technologies.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg bg-white/5">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-white/70 font-normal text-sm">
                  Effective Date: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <div className="border border-white/10 rounded-xl p-8 bg-gray-900/20 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4 tracking-wide">Questions About Our Terms?</h3>
              <p className="text-white/70 font-normal mb-6 max-w-2xl mx-auto">
                Please contact us for any questions or problems about our terms and conditions.
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
                <div className="text-center">
                  <Phone className="w-5 h-5 text-blue-400 inline-block mb-2" />
                  <p className="text-white/80 font-normal">
                    <a href="tel:+916353653977" className="hover:text-white transition-colors">
                      +916 353 653 977
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-white/50 font-normal text-sm">
            © {new Date().getFullYear()} Dcodes Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;