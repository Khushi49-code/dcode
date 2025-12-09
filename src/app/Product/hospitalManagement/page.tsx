
"use client";
import { useState } from 'react';
import ColorBends from '@/components/ReactBit/ColorBends';
import FeatureCard from './FeatureCard';
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
// comparision data
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
            {/* hero text and button */}
            {/* <div className="relative z-10 mt-30  sm:mt-32 lg:mt-34 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-4">
                        Delivering Innovative IT Solutions That Drive Business Growth
                    </h1>
                    <p className="text-base sm:text-lg text-gray-500 p-3 max-w-4xl mx-auto">
                        Explore Our Portfolio of Successful Digital Transformations
                        From enterprise software to cloud solutions every project reflects our commitment to excellence
                    </p>
                    <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center sm:gap-4">
                        <button
                            className='p-3 cursor-pointer w-45 md:w-58 lg:w-70 bg-gradient-to-r from-purple-800 to-blue-700 text-white font-bold rounded-full'
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/Dcodes Technologies Corporate Profile.pdf';
                                link.download = 'portfolio.pdf';
                                link.click();
                            }}>
                            Download Portfolio
                        </button>
                        <button
                            className='p-3 cursor-pointer w-45 md:w-58 lg:w-70 bg-transparent text-white font-bold rounded-full border-2 border-gray-400 hover:border-white transition-all duration-300'
                            onClick={() => window.open('/Dcodes Technologies Corporate Profile.pdf', '_blank')}>
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div> */}
            {/* hero text and button ends */}
            <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-6xl">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white ">
                        FOR HEALTHCARE PROVIDERS
                    </h1>
                    <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6">
                        TRANSFORM YOUR HOSPITAL MANAGEMENT
                    </h2>
                    <p className="text-lg font-sans font-light tracking-wide sm:text-xl text-gray-400 p-4 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Modern platform for managing patient records, medical operations, and healthcare services
                    </p>
                    {/* <div className="flex flex-col gap-3 items-center sm:flex-row sm:justify-center sm:gap-4">
                        <button
                            className='px-6 py-2 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-full flex items-center justify-center gap-2 group hover:shadow-lg transition-all duration-300 text-base sm:text-lg whitespace-nowrap min-w-[140px]'
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/Hospital-ERP-Demo.pdf';
                                link.download = 'hospital-erp-demo.pdf';
                                link.click();
                            }}>
                            Start Free Trial
                            <span className="group-hover:rotate-45 px-2 py-1 backdrop-blur-md bg-white/10 rounded-full transition-all duration-300">→</span>
                        </button>
                        <button
                            className='px-12 py-2 cursor-pointer bg-transparent  font-thin rounded-full border border-gray-400  hover:bg-gray-800  hover:bg-opacity-10 transition-all duration-200 text-base sm:text-lg whitespace-nowrap min-w-[140px]'>
                            Watch Demo
                        </button>
                    </div> */}
                </div>
            </div>
            {/* features section */}
            <div className="py-5 mt-10 px-3 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center ">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Comprehensive Healthcare Modules
                        </h2>
                        <p className="text-lg text-gray-400 my-5 max-w-3xl mx-auto">
                            End-to-end solutions covering all hospital management needs
                        </p>
                    </div>
                </div>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
            <div className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Choose Our Hospital ERP?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Compare traditional systems with our modern healthcare solution
                        </p>
                    </div>
                    <div className="border overflow-x-auto">
                        <table className="w-full bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-400">
                            <thead>
                                <tr className="bg-gray-900">
                                    <th className="py-4 px-6 text-left text-white font-bold text-lg">Feature / Category</th>
                                    <th className="py-4 px-6 text-left text-red-400 font-bold">Traditional System :x:</th>
                                    <th className="py-4 px-6 text-left text-green-400 font-bold">Our ERP Solution :white_tick:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700 border-gray-500 border'}>
                                        <td className="py-4 px-6 text-white font-medium">{item.feature}</td>
                                        <td className="py-4 px-6 text-gray-400">{item.traditional}</td>
                                        <td className="py-4 px-6 text-gray-300">{item.ourSolution}</td>
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