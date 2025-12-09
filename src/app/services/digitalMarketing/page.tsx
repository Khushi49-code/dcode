// "use client";
// import Beams from '@/components/ReactBit/Beams';
// import React, { useState, useEffect } from 'react';

// export default function DigitalMarketingSolutions() {
//   const [activeService, setActiveService] = useState(null);
//   const [openFaq, setOpenFaq] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const services = [
//     {
//       id: 1,
//       title: "Search Engine Optimization (SEO)",
//       description: "Improve your website's visibility and rank higher on search engines to attract more organic traffic.",
//       number: "01"
//     },
//     {
//       id: 2,
//       title: "Social Media Marketing (SMM)",
//       description: "Build a strong brand presence and engage with your audience on platforms like Facebook, Instagram, and LinkedIn.",
//       number: "02"
//     },
//     {
//       id: 3,
//       title: "Content Marketing",
//       description: "Create and distribute valuable, relevant content to attract and retain a clearly defined audience.",
//       number: "03"
//     },
//     {
//       id: 4,
//       title: "Pay-Per-Click (PPC) Advertising",
//       description: "Drive immediate, targeted traffic to your site with high-impact advertising campaigns on Google and other platforms.",
//       number: "04"
//     }
//   ];

//   const capabilities = [
//     "Comprehensive SEO audits",
//     "Targeted social media campaigns",
//     "Email marketing automation",
//     "Professional copywriting",
//     "Conversion rate optimization (CRO)",
//     "Performance analytics & reporting"
//   ];

//   const philosophy = [
//     { principle: "Strategy", description: "Data-driven campaign planning" },
//     { principle: "Innovation", description: "Adapting to market trends" },
//     { principle: "Engagement", description: "Connecting with your audience" },
//     { principle: "Results", description: "Delivering measurable growth" }
//   ];

//   const faqs = [
//     {
//       question: "How long does it take to see results from digital marketing?",
//       answer: "Results vary depending on the services used. PPC campaigns can deliver immediate traffic, while SEO and content marketing typically show significant results within 3-6 months. We provide regular reports to track progress and adjust strategies for optimal performance."
//     },
//     {
//       question: "Is digital marketing expensive for small businesses?",
//       answer: "Digital marketing can be tailored to fit any budget. We offer flexible service packages and can create a custom strategy that maximizes your return on investment (ROI), ensuring every dollar spent contributes to your business growth."
//     },
//     {
//       question: "How do you measure the success of a campaign?",
//       answer: "We use key performance indicators (KPIs) such as website traffic, lead generation, conversion rates, and ROI. Our analytics team provides detailed reports that show the direct impact of our campaigns on your business goals."
//     }
//   ];

//   return (
//     <div className="bg-black text-white min-h-screen font-normal antialiased">

// <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
//   <Beams
//     beamWidth={2}
//     beamHeight={15}
//     beamNumber={12}
//     lightColor="#ffffff"
//     speed={4}
//     noiseIntensity={1.75}
//     scale={0.4}
//     rotation={25}
//   />
// </div>


//       {/* Subtle cursor following gradient */}
//       <div 
//         className="fixed inset-0 pointer-events-none opacity-10 z-0"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 50%)`
//         }}
//       />

//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center px-8">
//           <div className="max-w-6xl mx-auto text-center">
//             <div className="mb-12">
//               <div className="text-xs tracking-[0.2em] text-gray-500 mb-8 uppercase">
//                 Online Presence
//               </div>
//               <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-tighter leading-none">
//                 Digital
//                 <br />
//                 <span className="font-normal">Marketing</span>
//               </h1>
//             </div>
            
//             <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
//               We offer a range of digital marketing services to help your business grow online.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
//               <button className="group bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 relative overflow-hidden">
//                 <span className="relative z-10">Start Your Campaign</span>
//               </button>
//               <button className="text-sm tracking-wide uppercase text-gray-400 hover:text-white transition-all duration-300 relative">
//                 View Success Stories
//                 <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Services Grid */}
//         <section className="py-32 px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="mb-24 text-center">
//               <h2 className="text-5xl font-extralight mb-6 tracking-tight">Our Services</h2>
//               <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
//             </div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800">
//               {services.map((service) => (
//                 <div 
//                   key={service.id}
//                   className="bg-black p-12 lg:p-16 hover:bg-gray-950 transition-all duration-700 cursor-pointer group"
//                   onMouseEnter={() => setActiveService(service.id)}
//                   onMouseLeave={() => setActiveService(null)}
//                 >
//                   <div className="flex items-start justify-between mb-8">
//                     <div className="text-6xl font-extralight text-gray-700 group-hover:text-gray-500 transition-colors duration-700">
//                       {service.number}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-2xl font-normal mb-6 group-hover:text-gray-200 transition-colors duration-500">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-gray-500 leading-relaxed text-lg font-normal group-hover:text-gray-400 transition-colors duration-500">
//                     {service.description}
//                   </p>
                  
//                   <div className="mt-8 w-0 h-px bg-white transition-all duration-700 group-hover:w-12"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="py-32 px-8 border-t border-gray-900">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
//               <div className="lg:col-span-5">
//                 <div className="text-xs tracking-[0.2em] text-gray-600 mb-8 uppercase">
//                   Since 2020
//                 </div>
//                 <h2 className="text-5xl font-extralight mb-12 tracking-tight leading-tight">
//                   Digital<br />Marketing Pros
//                 </h2>
//                 <div className="space-y-8">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-2 bg-white rounded-full"></div>
//                     <span className="text-sm tracking-wide text-gray-400">Certified Google Partners</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-2 bg-white rounded-full"></div>
//                     <span className="text-sm tracking-wide text-gray-400">ROI-Focused Campaigns</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-2 bg-white rounded-full"></div>
//                     <span className="text-sm tracking-wide text-gray-400">24/7 Performance Monitoring</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="lg:col-span-7">
//                 <p className="text-2xl font-normal text-gray-300 leading-relaxed mb-12">
//                   We craft powerful digital marketing strategies that connect your brand with the right audience and drive measurable growth. Our expertise spans everything from optimizing for search engines to creating engaging social media campaigns.
//                 </p>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {capabilities.map((capability, index) => (
//                     <div key={index} className="group cursor-pointer">
//                       <div className="flex items-start gap-4 p-6 border border-gray-900 hover:border-gray-800 transition-all duration-300">
//                         <div className="w-1 h-1 bg-gray-600 rounded-full mt-3 group-hover:bg-white transition-colors duration-300"></div>
//                         <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-normal">
//                           {capability}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Philosophy Section */}
//         <section className="py-32 px-8 border-t border-gray-900">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-24">
//               <h2 className="text-5xl font-extralight mb-6 tracking-tight">Our Philosophy</h2>
//               <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {philosophy.map((item, index) => (
//                 <div key={index} className="text-center group">
//                   <div className="mb-8">
//                     <div className="w-px h-16 bg-gray-800 mx-auto group-hover:bg-gray-600 transition-colors duration-500"></div>
//                   </div>
//                   <h3 className="text-xl font-normal mb-4 group-hover:text-gray-300 transition-colors duration-300">
//                     {item.principle}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed font-normal">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-32 px-8 border-t border-gray-900">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter">
//               Ready to Grow?
//             </h2>
//             <p className="text-xl text-gray-400 mb-16 font-normal leading-relaxed max-w-2xl mx-auto">
//               Elevate your online presence and attract more customers with a customized digital marketing strategy.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
//               <button className="bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 font-medium">
//                 Request a Quote
//               </button>
//               <button className="border border-gray-800 px-12 py-4 text-sm tracking-wide uppercase hover:border-gray-600 transition-all duration-300 font-medium">
//                 View Our Portfolio
//               </button>
//             </div>
            
//             <div className="text-xs tracking-wide text-gray-600 uppercase">
//               Digital Growth Experts • Free Consultation Available
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="py-32 px-8 border-t border-gray-900">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-24">
//               <h2 className="text-5xl font-extralight mb-6 tracking-tight">Common Questions</h2>
//               <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
//             </div>
            
//             <div className="space-y-px">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="bg-gray-950 border border-gray-900">
//                   <button
//                     className="w-full text-left p-8 hover:bg-black transition-all duration-300 flex items-center justify-between group"
//                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   >
//                     <h3 className="text-lg font-normal pr-8 group-hover:text-gray-300 transition-colors duration-300">
//                       {faq.question}
//                     </h3>
//                     <span className={`text-2xl font-extralight transform transition-all duration-300 ${
//                       openFaq === index ? 'rotate-45 text-gray-400' : 'text-gray-600'
//                     }`}>
//                       +
//                     </span>
//                   </button>
//                   {openFaq === index && (
//                     <div className="px-8 pb-8 border-t border-gray-900 animate-in slide-in-from-top-2 duration-300">
//                       <p className="text-gray-400 leading-relaxed font-normal pt-6">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

       
//       </div>
//     </div>
//   );
// }














"use client";
import Beams from '@/components/ReactBit/Beams';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Lightbulb, BarChart3, Users, Rocket, Layers } from "lucide-react";


export default function DigitalMarketingSolutions() {
  const [activeService, setActiveService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description: "Elevate your website's visibility and attract organic traffic through AI-driven keyword analysis, technical optimization, and data-backed content strategies.",
      number: "01"
    },
    {
      id: 2,
      title: "Social Media Marketing (SMM)",
      description: "Build impactful social presence across LinkedIn, Instagram, and Facebook with personalized campaigns that connect brands to audiences globally.",
      number: "02"
    },
    {
      id: 3,
      title: "Content Marketing",
      description: "Craft engaging, conversion-focused stories that build authority and trust across blogs, videos, and social platforms.",
      number: "03"
    },
    {
      id: 4,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Maximize ROI with intelligent PPC campaigns designed for precision targeting, real-time tracking, and cost-effective lead generation.",
      number: "04"
    }
  ];

  const capabilities = [
    "Advanced Analytics and Reporting",
    "Global Audience Targeting",
    "Email & Marketing Automation",
    "Professional copywriting",
    "Conversion Rate Optimization (CRO)",
    "Programmatic Advertising"
  ];


const philosophy = [
  {
    principle: "Strategy",
    description: "Data-driven campaign planning backed by insights and clarity.",
    icon: BarChart3,
  },
  {
    principle: "Innovation",
    description: "Adopting new technologies, automation, and AI to stay ahead of trends.",
    icon: Lightbulb,
  },
  {
    principle: "Engagement",
    description: "Creating emotional and interactive experiences for your audience.",
    icon: Users,
  },
  {
    principle: "Results",
    description: "Driving measurable growth that delivers real business impact.",
    icon: Rocket,
  },
  {
    principle: "Scalability",
    description: "Designing campaigns that evolve seamlessly as your business grows.",
    icon: Layers,
  },
];



 


  const whyChooseUs = [
    "Unified marketing and technology expertise.",
    "Proven track record across 10+ global industries.",
    "AI and automation integration in every campaign.",
    "Transparent, data-backed performance reporting.",
    "Dedicated success managers for enterprise accounts."
  ];

  const industries = [
    "SaaS", "Manufacturing", "Healthcare", "Finance", "Retail", "Real Estate"
  ];

  const caseStudies = [
    {
      metric: "400%",
      description: "Increased organic traffic for an enterprise client in 6 months.",
      industry: "SaaS"
    },
    {
      metric: "3.2x",
      description: "ROI improvement through AI-optimized PPC campaigns.",
      industry: "E-commerce"
    },
    {
      metric: "15K+",
      description: "Leads generated through integrated marketing automation.",
      industry: "Healthcare"
    }
  ];

  const trustBadges = [
    "Google Partner", "Meta Certified", "ISO 9001", "Clutch Verified"
  ];

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "SEO results usually appear in 3–4 months, while paid campaigns deliver leads within days of launch."
    },
    {
      question: "Is digital marketing expensive for small businesses?",
      answer: "Not at all — we tailor campaigns to fit your budget and goals, ensuring the highest ROI at every scale."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track KPIs like engagement rate, conversion cost, customer lifetime value (CLV), and ROI — not just clicks."
    }
  ];

  // Analytics counter simulation
  const [analytics, setAnalytics] = useState({
    impressions: 12500000,
    leads: 34700,
    conversionRate: 7.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        impressions: prev.impressions + Math.floor(Math.random() * 1000),
        leads: prev.leads + Math.floor(Math.random() * 10),
        conversionRate: 8.2 + (Math.random() - 0.5) * 0.1
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-normal antialiased">

      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={4}
          noiseIntensity={1.75}
          scale={0.4}
          rotation={25}
        />
      </div>

      {/* Subtle cursor following gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 50%)`
        }}
      />

      {/* Sticky WhatsApp/Book Call Button */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group">
          <span>📱</span>
          <span className="font-medium">Book Strategy Call</span>
        </button>
      </div> */}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(45deg, #0066FF 0%, #1B1C1E 100%)',
              animation: 'wave 8s ease-in-out infinite'
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-25 text-center relative z-10">
            <div className="mb-12">
              <div className="text-xs tracking-[0.2em] text-gray-500 mb-8 font-semibold uppercase">
                Technology Meets Marketing
              </div>
              <h1 className="text-4xl md:text-7xl font-extralight mb-12 tracking-tighter leading-none">
                Digital Marketing, 
                <br />
                <span className="font-normal">Redefined by Technology</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
              We merge creativity, data, and cutting-edge technology to deliver measurable digital growth for global brands.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-xs tracking-wide font-bold text-gray-200 border border-gray-800 px-4 py-2 rounded-full">
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href={'/connect'} className="group bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 relative overflow-hidden">
                <span className="relative z-10">Start Your Campaign</span>
              </Link>
              <Link href={'/success-stories'} className="text-sm tracking-wide uppercase text-gray-400 hover:text-white transition-all duration-300 relative group">
                View Success Stories
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Analytics Dashboard */}
        <section className="py-20 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-4xl font-normal mb-2 text-blue-400">
                  {analytics.impressions.toLocaleString()}+
                  {/* 10000 */}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Ad Impressions</div>
              </div>
              <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-4xl font-normal mb-2 text-green-400">
                  {analytics.leads.toLocaleString()}+
                  {/* 1000 */}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Leads Generated</div>
              </div>
              <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-4xl font-normal mb-2 text-purple-400">
                  {analytics.conversionRate.toFixed(1)}%
                  {/* 7.2 */}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Avg. Conversion Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Carousel */}
        <section className="py-20 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Real Results</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
                <div className="text-6xl font-normal text-blue-400 mb-4">
                  {/* {caseStudies[currentCaseStudy].metric} */}
                  100%
                </div>
                <p className="text-xl text-gray-300 mb-4 font-normal">
                  {caseStudies[currentCaseStudy].description}
                </p>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                  {caseStudies[currentCaseStudy].industry} Industry
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-4">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCaseStudy(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCaseStudy === index ? 'bg-white' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
     <section className="py-20 px-8 border-t border-gray-900">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extralight mb-6 tracking-tight">Industries We Serve</h2>
      <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="px-6 py-3 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300 cursor-default"
        >
          {industry}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Services Grid */}
        <section className="py-32 px-8 border-t border-gray-900">
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
                  Since 2019 — Technology Meets Marketing
                </div>
                <h2 className="text-5xl font-extralight mb-12 tracking-tight leading-tight">
                  Digital<br />Marketing Pros
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm tracking-wide text-gray-400">Certified Google & Meta Partners</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm tracking-wide text-gray-400">ROI-Focused Campaigns</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm tracking-wide text-gray-400">24/7 Performance Monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <p className="text-2xl font-normal text-gray-300 leading-relaxed mb-6">
                  We craft high-performance marketing ecosystems that amplify brand presence and deliver measurable outcomes.
                </p>
                <p className="text-xl font-normal text-gray-400 leading-relaxed mb-12">
                  Our approach combines creative storytelling, marketing automation, and AI-powered analytics to help enterprises grow at scale.
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

        {/* Why Choose Us Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Why Choose Dcodes for Digital Marketing</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center group p-8 border border-gray-900 hover:border-gray-800 transition-all duration-500">
                  <div className="mb-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed font-normal group-hover:text-gray-300 transition-colors duration-300">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extralight mb-6 tracking-tight">
            Our Philosophy
          </h2>
          <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {philosophy.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center group p-6 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-800/60 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors duration-300">
                  {item.principle}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

        {/* CTA Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter">
              Ready to Grow?
            </h2>
            <p className="text-xl text-gray-400 mb-16 font-normal leading-relaxed max-w-2xl mx-auto">
              Empower your brand to reach global audiences with scalable, data-driven marketing strategies engineered for measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <Link href="/contact" className="bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 font-medium">
                Request a Quote
              </Link>
              <Link href="/portfolio" className="border border-gray-800 px-12 py-4 text-sm tracking-wide uppercase hover:border-gray-600 transition-all duration-300 font-medium">
                View Our Portfolio
              </Link>
            </div>
            
            <div className="text-xs tracking-wide font-medium text-gray-600 uppercase">
              Digital Growth Experts • Free Consultation Available
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Frequently Asked Questions</h2>
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

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}