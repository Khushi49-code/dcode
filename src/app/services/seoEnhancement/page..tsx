"use client";
import React, { useState, useEffect } from 'react';

export default function SEOSolutions() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: "Technical SEO Audit",
      description: "Analyzing your website's technical health to ensure search engine crawlers can efficiently index your pages.",
      number: "01"
    },
    {
      id: 2,
      title: "On-Page Optimization",
      description: "Optimizing individual web pages with high-value keywords, meta tags, and high-quality content.",
      number: "02"
    },
    {
      id: 3,
      title: "Off-Page SEO & Link Building",
      description: "Building a strong backlink profile and promoting your brand across the web to increase authority.",
      number: "03"
    },
    {
      id: 4,
      title: "Keyword Research & Strategy",
      description: "Discovering and targeting the most profitable keywords to attract qualified traffic to your site.",
      number: "04"
    }
  ];

  const capabilities = [
    "Comprehensive keyword research",
    "Technical site audits",
    "High-quality content creation",
    "Local SEO optimization",
    "Backlink analysis & outreach",
    "Performance analytics"
  ];

  const philosophy = [
    { principle: "Authority", description: "Building trust and credibility with search engines" },
    { principle: "Relevance", description: "Targeting the right audience with valuable content" },
    { principle: "Analytics", description: "Measuring success and refining strategy" },
    { principle: "Adaptability", description: "Keeping up with algorithm changes" }
  ];

  const faqs = [
    {
      question: "How long until I see SEO results?",
      answer: "SEO is a long-term strategy, with initial improvements typically visible within 3-6 months. Significant ranking increases and organic traffic growth often take 6-12 months, depending on your industry and competition. We focus on sustainable, long-term success."
    },
    {
      question: "What is the most important factor in SEO?",
      answer: "While many factors contribute to SEO, the most critical elements are high-quality, relevant content and a strong backlink profile. Our strategy focuses on both to ensure your website is a trusted source of information."
    },
    {
      question: "Do you guarantee a #1 ranking on Google?",
      answer: "No reputable SEO company can guarantee a specific ranking. Search engine algorithms are constantly changing, and competition is fierce. We guarantee to use industry-leading best practices to maximize your chances of ranking highly and driving organic traffic."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-normal antialiased">
      {/* Subtle cursor following gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 50%)`
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <div className="text-xs tracking-[0.2em] text-gray-500 mb-8 uppercase">
                Online Visibility
              </div>
              <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-tighter leading-none">
                SEO
                <br />
                <span className="font-normal">Enhancement</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
              Search engine optimization services that boost your online visibility and drive organic growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="group bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 relative overflow-hidden">
                <span className="relative z-10">Request SEO Audit</span>
              </button>
              <button className="text-sm tracking-wide uppercase text-gray-400 hover:text-white transition-all duration-300 relative">
                View SEO Case Studies
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Our Services</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-black p-12 lg:p-16 hover:bg-gray-950 transition-all duration-700 cursor-pointer group"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-6xl font-extralight text-gray-700 group-hover:text-gray-500 transition-colors duration-700">
                      {service.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-normal mb-6 group-hover:text-gray-200 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-lg font-normal group-hover:text-gray-400 transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 w-0 h-px bg-white transition-all duration-700 group-hover:w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="text-xs tracking-[0.2em] text-gray-600 mb-8 uppercase">
                  Since 2020
                </div>
                <h2 className="text-5xl font-extralight mb-12 tracking-tight leading-tight">
                  SEO<br />Solutions Pro
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm tracking-wide text-gray-400">Google Certified Experts</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm tracking-wide text-gray-400">Organic Growth Focus</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm tracking-wide text-gray-400">Performance Monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <p className="text-2xl font-normal text-gray-300 leading-relaxed mb-12">
                  We craft powerful SEO strategies that increase your organic search rankings and connect your brand with the right audience. Our expertise spans technical audits, on-page optimization, and strategic link building.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-start gap-4 p-6 border border-gray-900 hover:border-gray-800 transition-all duration-300">
                        <div className="w-1 h-1 bg-gray-600 rounded-full mt-3 group-hover:bg-white transition-colors duration-300"></div>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-normal">
                          {capability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Our SEO Philosophy</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophy.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-8">
                    <div className="w-px h-16 bg-gray-800 mx-auto group-hover:bg-gray-600 transition-colors duration-500"></div>
                  </div>
                  <h3 className="text-xl font-normal mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {item.principle}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter">
              Ready for Top Rankings?
            </h2>
            <p className="text-xl text-gray-400 mb-16 font-normal leading-relaxed max-w-2xl mx-auto">
              Boost your organic visibility and attract more customers with a tailored SEO strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <button className="bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 font-medium">
                Get a Free SEO Audit
              </button>
              <button className="border border-gray-800 px-12 py-4 text-sm tracking-wide uppercase hover:border-gray-600 transition-all duration-300 font-medium">
                View SEO Pricing
              </button>
            </div>
            
            <div className="text-xs tracking-wide text-gray-600 uppercase">
              SEO Specialists • Free Consultation Available
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Common Questions</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="space-y-px">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-950 border border-gray-900">
                  <button
                    className="w-full text-left p-8 hover:bg-black transition-all duration-300 flex items-center justify-between group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-normal pr-8 group-hover:text-gray-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className={`text-2xl font-extralight transform transition-all duration-300 ${
                      openFaq === index ? 'rotate-45 text-gray-400' : 'text-gray-600'
                    }`}>
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-8 border-t border-gray-900 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-400 leading-relaxed font-normal pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
}
