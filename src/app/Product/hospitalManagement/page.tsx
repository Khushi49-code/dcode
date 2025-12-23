"use client";
import { useState } from 'react';
import ColorBends from '@/components/ReactBit/ColorBends';
import FeatureCard from './FeatureCard';
import Head from 'next/head';

// feature data
const featuresData = [
    {
        icon: "👨‍⚕️",
        title: "Patient Management",
        description: "Complete patient records, medical history, and treatment plans"
    },
    {
        icon: "📅",
        title: "Appointment Scheduling",
        description: "Smart booking system with doctor availability and reminders"
    },
    {
        icon: "💊",
        title: "Pharmacy & Inventory",
        description: "Medicine stock management and prescription tracking"
    },
    {
        icon: "💰",
        title: "Billing & Insurance",
        description: "Automated billing, insurance claims, and payment processing"
    },
    {
        icon: "🩺",
        title: "Doctor Portal",
        description: "Dedicated interface for doctors with patient dashboards"
    },
    {
        icon: "📊",
        title: "Analytics & Reports",
        description: "Real-time insights and performance analytics"
    },
    {
        icon: "🔒",
        title: "Data Security & Compliance",
        description: "Assure potential clients that the system meets regulatory standards like HIPAA, including features like data encryption and access controls."
    },
    {
        icon: "👥",
        title: "Human Resources",
        description: "Staff management, payroll processing, attendance tracking, and scheduling."
    },
    {
        icon: "💻",
        title: "Electronic Health Records (EHR) Integration",
        description: "Seamless integration with existing EHR systems for unified patient data management"
    }
];

// comparison data
const comparisonData = [
    { feature: 'Implementation Time', traditional: '3-6 Months', ourSolution: '2-4 Weeks' },
    { feature: 'Training Required', traditional: 'Extensive (40+ hours)', ourSolution: 'Minimal (10 hours)' },
    { feature: 'Customer Support', traditional: 'Business Hours Only', ourSolution: '24/7 Dedicated Support' },
    { feature: 'System Updates', traditional: 'Manual, Disruptive', ourSolution: 'Automatic, Zero Downtime' },
    { feature: 'Scalability', traditional: 'Limited, Hardware Dependent', ourSolution: 'Unlimited, Cloud Native' },
    { feature: 'Total Cost of Ownership', traditional: 'High, Unpredictable', ourSolution: 'Predictable Monthly/Yearly' },
    { feature: 'Data Security', traditional: 'Basic, Compliance Risks', ourSolution: 'Advanced, HIPAA/GDPR Ready' },
    { feature: 'Mobile Access', traditional: 'Limited or None', ourSolution: 'Full Mobile App Suite' },
];

export default function Hospital() {
    return (
        <>
            {/* SEO Meta Tags and Structured Data */}
            <Head>
                <title>Hospital Management System Software | Healthcare Management – Dcodes</title>
                <meta name="description" content="Get advanced hospital management system software for healthcare and medical institutions. Streamline operations, patient care, billing, and reporting with our solution." />
                <meta name="keywords" content="hospital management system software,hospital management software,hospital information system,healthcare management system,medical practice management software
,clinic management software" />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Hospital ERP Solutions | Healthcare Management System | Dcodes" />
                <meta property="og:description" content="Modern platform for managing patient records, medical operations, and healthcare services with comprehensive Hospital ERP solution." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dcodes.com/hospital-erp" />
                <meta property="og:image" content="https://dcodes.com/og-image-hospital-erp.jpg" />
                <meta property="og:site_name" content="Dcodes Technologies" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hospital ERP Solutions | Healthcare Management" />
                <meta name="twitter:description" content="Comprehensive Hospital ERP solution for modern healthcare providers." />
                <meta name="twitter:image" content="https://dcodes.com/twitter-card-hospital.jpg" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://dcodes.com/hospital-erp" />
                
                {/* Structured Data for Hospital ERP Service */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Hospital ERP Solutions",
                        "description": "Comprehensive Hospital Enterprise Resource Planning system for healthcare providers including patient management, appointment scheduling, pharmacy inventory, and EHR integration.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Dcodes Technologies",
                            "url": "https://dcodes.com",
                            "logo": "https://dcodes.com/logo.png",
                            "sameAs": [
                                "https://linkedin.com/company/dcodes",
                                "https://twitter.com/dcodes",
                                "https://github.com/dcodes"
                            ]
                        },
                        "serviceType": ["Hospital Management Software", "Healthcare ERP", "Medical Software"],
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "offers": {
                            "@type": "Offer",
                            "description": "Comprehensive Hospital ERP solution"
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

            <div className="relative h-screen">
                <ColorBends
                    colors={["#6366F1", "#8B5CF6", "#06B6D4"]}
                    rotation={93}
                    speed={0.1}
                    scale={1}
                    frequency={1}
                    warpStrength={0}
                    mouseInfluence={0}
                    parallax={0.5}
                    noise={0}
                    transparent
                />
            </div>

            {/* Hero Section */}
            <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-6xl" itemScope itemType="https://schema.org/WebPage">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white" itemProp="headline">
                        FOR HEALTHCARE PROVIDERS
                    </h1>
                    <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6">
                        TRANSFORM YOUR HOSPITAL MANAGEMENT
                    </h2>
                    <p className="text-lg font-sans font-light tracking-wide sm:text-xl text-gray-400 p-4 max-w-3xl mx-auto mb-8 leading-relaxed" itemProp="description">
                        Modern platform for managing patient records, medical operations, and healthcare services
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-5 mt-10 px-3 bg-black" itemScope itemType="https://schema.org/ItemList">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" itemProp="name">
                            Comprehensive Healthcare Modules
                        </h2>
                        <p className="text-lg text-gray-400 my-5 max-w-3xl mx-auto" itemProp="description">
                            End-to-end solutions covering all hospital management needs
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/Thing">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Section */}
            <div className="py-20 bg-gray-900" itemScope itemType="https://schema.org/Comparison">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" itemProp="name">
                            Why Choose Our Hospital ERP?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto" itemProp="description">
                            Compare traditional systems with our modern healthcare solution
                        </p>
                    </div>
                    <div className="border overflow-x-auto">
                        <table className="w-full bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-400">
                            <thead>
                                <tr className="bg-gray-900">
                                    <th className="py-4 px-6 text-left text-white font-bold text-lg">Feature / Category</th>
                                    <th className="py-4 px-6 text-left text-red-400 font-bold">Traditional System</th>
                                    <th className="py-4 px-6 text-left text-green-400 font-bold">Our ERP Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700 border-gray-500 border'}>
                                        <td className="py-4 px-6 text-white font-medium" itemProp="name">{item.feature}</td>
                                        <td className="py-4 px-6 text-gray-400" itemProp="disadvantages">{item.traditional}</td>
                                        <td className="py-4 px-6 text-gray-300" itemProp="advantages">{item.ourSolution}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-12 text-center text-gray-400 text-sm">
                        <p>All plans include 24/7 support, automatic updates, and cloud deployment</p>
                    </div>
                </div>
            </div>
        </>
    );
};