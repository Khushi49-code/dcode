"use client"

import React, { useState } from 'react';
import { ChevronDown, Shield, Cookie, Lock, Eye, User, Database, Mail, Earth } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index: any) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

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
            Policy
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <Mail className="w-5 h-5 text-blue-400 inline-block mb-2" />
                    <p className="text-white/80 font-normal">info@dcodestech.com</p>
                </div>
                <div className="text-center">
                  <Earth className="w-5 h-5 text-blue-400 inline-block mb-2" />
                  <p className="text-white/80 font-normal">www.dcodestech.com</p>
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