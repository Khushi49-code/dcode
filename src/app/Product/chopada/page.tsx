//import React  from 'react';
"use client"
import React, { useEffect, useRef } from 'react';
import Prism from '@/components/ReactBit/Prism';
import Head from 'next/head';

const ChopadaLanding = () => {
  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Head>
        <title>Chopada App - Digital Platform for Bhudev Families & Spiritual Legacy</title>
        <meta name="description" content="Modern platform for managing puja records, client relationships, and family lineage. Preserve your spiritual heritage with Chopada App designed for Bhudev families." />
        <meta name="keywords" content="Chopada app, Bhudev families, puja management, spiritual legacy, family lineage, Hindu rituals, priest software, puja records, digital spiritual platform" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Chopada App - Digital Platform for Bhudev Families & Spiritual Legacy" />
        <meta property="og:description" content="Modern platform for managing puja records, client relationships, and family lineage for Bhudev families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dcodes.com/chopada" />
        <meta property="og:image" content="https://dcodes.com/og-image-chopada.jpg" />
        <meta property="og:site_name" content="Chopada App" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chopada App - Digital Platform for Bhudev Families" />
        <meta name="twitter:description" content="Preserve your spiritual legacy with modern puja management and family lineage tracking." />
        <meta name="twitter:image" content="https://dcodes.com/twitter-card-chopada.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dcodes.com/chopada" />
        
        {/* Structured Data for App */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Chopada App",
            "description": "Digital platform for Bhudev families to manage puja records, client relationships, and family lineage",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Android, iOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "500"
            },
            "author": {
              "@type": "Organization",
              "name": "Dcodes Technologies"
            }
          })}
        </script>
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Dcodes Technologies" />
        <meta name="theme-color" content="#000000" />
        
        {/* Language and Region */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Gujarat" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}

        <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" itemScope itemType="https://schema.org/WebPage">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-1.5 bg-gray-900 border border-gray-800 text-gray-400 text-xs tracking-widest">
                FOR BHUDEV FAMILIES
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-normal tracking-tight leading-none mb-8" itemProp="headline">
                Preserve Your<br/>
                <span className="text-blue-400">Spiritual Legacy</span>
              </h1>
              
              <p className="text-xl text-black font-normal max-w-2xl mx-auto mb-12 leading-relaxed" itemProp="description">
                Modern platform for managing puja records, client relationships, and family lineage
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-blue-400 text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-blue-300 transition-all"
                  aria-label="Download Chopada App"
                >
                  Download App
                </button>
                <button 
                  className="border border-gray-800 text-white px-10 py-4 text-sm font-medium tracking-wide hover:border-gray-700 transition-all"
                  aria-label="Watch Chopada App demo"
                >
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Minimalist Preview Card */}
            <div className="max-w-4xl mx-auto mt-24">
              <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-1">
                <div className="bg-black p-8 lg:p-12" itemScope itemType="https://schema.org/ItemList">
                  <div className="grid grid-cols-3 gap-8 mb-12">
                    <div className="text-center border-r border-gray-900" itemProp="itemListElement" itemScope itemType="https://schema.org/Thing">
                      <div className="text-4xl font-normal text-blue-400 mb-2" itemProp="value">500+</div>
                      <div className="text-xs text-gray-500 tracking-widest" itemProp="name">FAMILIES</div>
                    </div>
                    <div className="text-center border-r border-gray-900" itemProp="itemListElement" itemScope itemType="https://schema.org/Thing">
                      <div className="text-4xl font-normal text-blue-400 mb-2" itemProp="value">10K+</div>
                      <div className="text-xs text-gray-500 tracking-widest" itemProp="name">PUJAS</div>
                    </div>
                    <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/Thing">
                      <div className="text-4xl font-normal text-blue-400 mb-2" itemProp="value">4.9</div>
                      <div className="text-xs text-gray-500 tracking-widest" itemProp="name">RATING</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-900 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500 tracking-widest">RECENT ACTIVITY</span>
                      <span className="text-xs text-gray-600">TODAY</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-3 border-b border-gray-900">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 bg-blue-400" aria-hidden="true"></div>
                          <span className="text-sm font-normal">Satyanarayan Puja</span>
                        </div>
                        <span className="text-xs text-gray-600">Completed</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-900">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 bg-gray-700" aria-hidden="true"></div>
                          <span className="text-sm font-normal">Client Meeting</span>
                        </div>
                        <span className="text-xs text-gray-600">Upcoming</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-gray-900" itemScope itemType="https://schema.org/AboutPage">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-24">
              <div className="text-xs text-gray-500 tracking-widest mb-6">WHY CHOPADA</div>
              <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight" itemProp="headline">
                Designed for tradition.<br/>
                Built for <span className="text-blue-400">tomorrow</span>
              </h2>
              <p className="text-xl text-gray-400 font-normal leading-relaxed" itemProp="description">
                A purposeful platform created specifically for Bhudev families to preserve spiritual traditions while embracing modern technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900">
              <div className="bg-black p-12 hover:bg-gray-950 transition-colors" itemProp="mainEntity" itemScope itemType="https://schema.org/Thing">
                <div className="text-blue-400 text-sm mb-6 tracking-widest">01</div>
                <h3 className="text-2xl font-normal mb-6" itemProp="name">Digital Records</h3>
                <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                  Complete puja documentation with dates, clients, and donations in one secure location
                </p>
              </div>
              
              <div className="bg-black p-12 hover:bg-gray-950 transition-colors" itemProp="mainEntity" itemScope itemType="https://schema.org/Thing">
                <div className="text-blue-400 text-sm mb-6 tracking-widest">02</div>
                <h3 className="text-2xl font-normal mb-6" itemProp="name">Family Lineage</h3>
                <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                  Preserve your complete family tree and spiritual heritage for future generations
                </p>
              </div>
              
              <div className="bg-black p-12 hover:bg-gray-950 transition-colors" itemProp="mainEntity" itemScope itemType="https://schema.org/Thing">
                <div className="text-blue-400 text-sm mb-6 tracking-widest">03</div>
                <h3 className="text-2xl font-normal mb-6" itemProp="name">Client Relations</h3>
                <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                  Manage yajmans with contact details, history, and automated reminders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 border-t border-gray-900" itemScope itemType="https://schema.org/ItemList">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="text-xs text-gray-500 tracking-widest mb-6">FEATURES</div>
                <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight" itemProp="name">
                  Everything you need
                </h2>
                <p className="text-xl text-gray-400 font-normal leading-relaxed" itemProp="description">
                  Comprehensive tools designed to manage your spiritual practice and preserve family legacy
                </p>
              </div>
              
              <div className="space-y-16">
                <div className="border-l border-gray-900 pl-8" itemProp="itemListElement" itemScope itemType="https://schema.org/SoftwareApplication">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">PUJA MANAGEMENT</div>
                  <h3 className="text-2xl font-normal mb-4" itemProp="name">Complete Documentation</h3>
                  <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                    Track every puja with comprehensive details including type, date, location, client information, and donations. Generate professional digital records and receipts instantly.
                  </p>
                </div>
                
                <div className="border-l border-gray-900 pl-8" itemProp="itemListElement" itemScope itemType="https://schema.org/SoftwareApplication">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">CLIENT DIRECTORY</div>
                  <h3 className="text-2xl font-normal mb-4" itemProp="name">Relationship Management</h3>
                  <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                    Maintain detailed client profiles with contact information, complete puja history, preferences, and send automated festival greetings to strengthen relationships.
                  </p>
                </div>
                
                <div className="border-l border-gray-900 pl-8" itemProp="itemListElement" itemScope itemType="https://schema.org/SoftwareApplication">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">FAMILY TREE</div>
                  <h3 className="text-2xl font-normal mb-4" itemProp="name">Lineage Preservation</h3>
                  <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                    Create and maintain your complete family lineage with gotra details, kuldevata information, and preserve your spiritual heritage for generations to come.
                  </p>
                </div>
                
                <div className="border-l border-gray-900 pl-8" itemProp="itemListElement" itemScope itemType="https://schema.org/SoftwareApplication">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">DONATION TRACKING</div>
                  <h3 className="text-2xl font-normal mb-4" itemProp="name">Financial Insights</h3>
                  <p className="text-gray-400 font-normal leading-relaxed" itemProp="description">
                    Monitor all donations and expenses with detailed reports, automated tax documentation, and comprehensive financial analytics at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interface Section */}
        <section className="py-10 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-0">
              <div className="text-xs text-gray-500 tracking-widest mb-6">INTERFACE</div>
              <h2 className="text-5xl lg:text-6xl font-normal mb-0 leading-tight">
                Beautifully <span className="text-blue-400">minimal</span>
              </h2>
              <p className=" text-xl text-gray-400 font-normal leading-relaxed">
                Clean interface designed with spirituality and modern usability in perfect harmony
              </p>
            </div>
            
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900">
              <div className="bg-black p-16 flex flex-col items-center justify-center min-h-[400px] hover:bg-gray-950 transition-colors">
                <img 
                  src="/screen/landing.png" 
                  alt="Chopada App landing screen showing puja management interface" 
                  className="max-w-full h-auto"
                  itemProp="image"
                />
              </div>
              
              <div className="bg-black p-16 flex flex-col items-center justify-center min-h-[400px] hover:bg-gray-950 transition-colors">
                <img 
                  src="/screen/femily.png" 
                  alt="Chopada App family tree and lineage management screen" 
                  className="max-w-full h-auto"
                  itemProp="image"
                />
              </div>
              
              <div className="bg-black p-16 flex flex-col items-center justify-center min-h-[400px] hover:bg-gray-950 transition-colors">
                <img 
                  src="/screen/deshbord.png" 
                  alt="Chopada App dashboard with puja statistics and activity overview" 
                  className="max-w-full h-auto"
                  itemProp="image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-32 border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight">
                Ready to begin?
              </h2>
              <p className="text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
                Join hundreds of Bhudev families preserving their spiritual heritage with Chopada
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Apple App Store Button */}
              <button 
                className="border border-gray-800 px-12 py-6 hover:border-gray-700 transition-all group"
                aria-label="Download Chopada App from Apple App Store"
              >
                <div className="flex items-center gap-4">
                  {/* Apple Icon */}
                  <div className="w-8 h-8" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 12.04C17.02 9.28 19.36 8.05 19.45 8C18.2 6.26 16.29 6 15.67 6C13.93 6 12.65 7.08 11.76 7.08C10.83 7.08 9.74 6.06 8.18 6.06C6.76 6.06 5.36 6.94 4.56 8.32C3.14 10.72 3.87 14.68 5.35 17.06C6.21 18.32 7.25 19.74 8.55 19.68C9.81 19.62 10.27 18.84 11.85 18.84C13.41 18.84 13.85 19.68 15.17 19.64C16.53 19.6 17.43 18.36 18.25 17.1C19.21 15.66 19.61 14.26 19.63 14.18C19.59 14.16 17.07 13.18 17.05 12.04ZM15.05 4.5C15.65 3.74 16.09 2.72 15.97 1.68C15.05 1.72 13.93 2.32 13.29 3.08C12.73 3.74 12.19 4.78 12.33 5.78C13.35 5.86 14.41 5.26 15.05 4.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 tracking-widest mb-1">DOWNLOAD FROM</div>
                    <div className="text-sm font-normal tracking-wide group-hover:text-blue-400 transition-colors">App Store</div>
                  </div>
                </div>
              </button>
              
              {/* Google Play Store Button */}
              <button 
                className="border border-gray-800 px-12 py-6 hover:border-gray-700 transition-all group"
                aria-label="Get Chopada App from Google Play Store"
              >
                <div className="flex items-center gap-4">
                  {/* Google Play Icon */}
                  <div className="w-8 h-8" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.609 1.814L13.792 12L3.61 22.186a1.77 1.77 0 0 1-.71-.713L11.647 12 2.9 2.527a1.77 1.77 0 0 1 .709-.713z" fill="#EA4335"/>
                      <path d="M3.61 22.186l.042.022L15.306 12.77l-2.27-1.928-9.426 11.344z" fill="#FBBC04"/>
                      <path d="M3.652 22.208L15.35 12.787l2.128-1.8L6.4 1.8a1.8 1.8 0 0 0-2.5.727L3.61 1.814l.042.022z" fill="#4285F4"/>
                      <path d="M21.503 12l-3.925-6.187-.013.01-2.115 1.8 2.27 1.928 3.783-2.715A1.8 1.8 0 0 1 22 9.866V12h-.497z" fill="#34A853"/>
                      <path d="M3.609 1.814A1.8 1.8 0 0 0 1.1 3.527v16.946a1.8 1.8 0 0 0 2.509 1.713l.042-.022L15.306 12.77l2.27-1.928L6.4 1.8a1.8 1.8 0 0 0-2.5.727L3.61 1.814z" fill="#C5221F"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 tracking-widest mb-1">GET IT FROM</div>
                    <div className="text-sm font-normal tracking-wide group-hover:text-blue-400 transition-colors">Google Play</div>
                  </div>
                </div>
              </button>
            </div>
            
            <div className="border border-gray-800 p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-normal mb-3">Start Your Journey</h3>
                  <p className="text-gray-400 font-normal">Begin preserving your family's spiritual heritage today</p>
                </div>
                <button 
                  className="bg-blue-400 text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-blue-300 transition-all whitespace-nowrap"
                  aria-label="Download Chopada App now"
                >
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-900 text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-gray-600 text-sm mb-4">© {new Date().getFullYear()} Chopada App. All rights reserved.</p>
            <p className="text-gray-700 text-xs">Designed for Bhudev families worldwide</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ChopadaLanding;