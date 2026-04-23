"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";  
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { User, Mail, Phone, MessageSquare, Send, Check, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import MapComponent from '@/components/MapComponent';
import Head from 'next/head';

// CAPTCHA Component
const CaptchaComponent = ({ onValidate }: { onValidate: (isValid: boolean) => void }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const generateRandomString = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateCaptcha = () => {
    const newCaptcha = generateRandomString();
    setCaptchaText(newCaptcha);
    setUserInput('');
    setIsValid(false);
    onValidate(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === captchaText;
    setIsValid(valid);
    onValidate(valid);
  };

  return (
    <div className="space-y-4" itemScope itemType="https://schema.org/Thing">
      <Label className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
        Security Verification
      </Label>

      {/* CAPTCHA Display */}
      <div className="flex items-center gap-4">
        <div
          className="h-16 px-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border border-white/20 min-w-[160px]"
          style={{
            fontFamily: 'monospace',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1e3a8a',
            letterSpacing: '3px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            transform: 'rotate(-0deg)',
            background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
            userSelect: 'none',
            pointerEvents: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
          draggable="false"
          aria-label={`CAPTCHA security code: ${captchaText}`}
        >
          {captchaText}
        </div>

        <Button
          type="button"
          onClick={generateCaptcha}
          variant="outline"
          className="h-16 w-16 border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white transition-all duration-300 rounded-xl"
          aria-label="Generate new CAPTCHA code"
        >
          <RefreshCw className="w-5 h-5" />
        </Button>
      </div>

      {/* CAPTCHA Input */}
      <div className="relative group">
        <Input
          type="text"
          placeholder="Type the characters above"
          value={userInput}
          onChange={handleInputChange}
          className={`h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl ${userInput && (isValid ? 'border-green-500/50' : 'border-red-500/50')
            }`}
          aria-label="CAPTCHA verification input"
          aria-describedby="captcha-description"
        />
        <div id="captcha-description" className="sr-only">
          Enter the characters shown in the image above to verify you are human
        </div>
        {userInput && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2" role="status" aria-live="polite">
            {isValid ? (
              <Check className="w-5 h-5 text-green-400" aria-label="CAPTCHA verification passed" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center" aria-label="CAPTCHA verification failed">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {userInput && !isValid && (
        <p className="text-red-400 text-sm font-normal" role="alert">
          Characters don't match. Please try again.
        </p>
      )}
    </div>
  );
};

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCaptchaValidation = (isValid: boolean) => {
    setIsCaptchaValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      toast.error("Please complete the security verification", {
        style: {
          background: '#000',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "connectRequests"), {
        ...formData,
        createdAt: Timestamp.now(),
        ipAddress: 'client-submitted',
        userAgent: navigator.userAgent,
      });
      toast.success("Your request has been submitted successfully", {
        style: {
          background: '#000',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          service: "",
          mobile: "",
          message: "",
        });
        setIsSubmitted(false);
        setIsCaptchaValid(false);
      }, 4000);
    } catch (error) {
      console.error("Error adding document:", error);
      toast.error("Failed to submit request. Please try again.", {
        style: {
          background: '#000',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "ui-ux", label: "UI/UX Design" },
    { value: "ecommerce", label: "E-commerce Solutions" },
    { value: "seo", label: "SEO & Digital Marketing" },
    { value: "consulting", label: "Technology Consulting" },
    { value: "other", label: "Other Services" },
  ];

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Message Sent Successfully | Contact Form Submitted | Dcodes Technologies</title>
          <meta name="description" content="Thank you for contacting Dcodes Technologies. Your message has been successfully submitted. We'll respond within 24 hours." />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

          <div className="relative z-10 text-center max-w-lg mx-auto">
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-8 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-extralight text-white mb-6 tracking-[0.2em]">
                MESSAGE SENT
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />
              <p className="text-white/60 font-normal text-lg leading-relaxed">
                Thank you for reaching out. We'll review your request and respond within 24 hours.
              </p>
            </div>

            <Link href="/">
              <Button
                variant="outline"
                className="border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white font-normal tracking-widest uppercase transition-all duration-500 px-8 py-6"
                aria-label="Return to home page"
              >
                <ArrowLeft className="w-4 h-4 mr-3" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Head>
        <title>Contact Web Development Company | Get a Quote – Dcodes</title>
        <meta name="description" content=" Get in touch with Dcodes for web development, mobile apps, software solutions, digital marketing, or ERP services. Request a consultation or a quote today." />
        <meta name="keywords" content="contact web development company,contact IT services company,software solution inquiry,mobile app development contact,digital marketing inquiry" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us | Get in Touch | Dcodes Technologies" />
        <meta property="og:description" content="Ready to bring your vision to life? Share your project details and let's create something extraordinary together." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dcodes.com/connect" />
        <meta property="og:image" content="https://dcodes.com/og-image-contact.jpg" />
        <meta property="og:site_name" content="Dcodes Technologies" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Dcodes Technologies" />
        <meta name="twitter:description" content="Get in touch for web development, mobile apps, and digital marketing services." />
        <meta name="twitter:image" content="https://dcodes.com/twitter-card-contact.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dcodes.com/connect" />
        
        {/* Structured Data for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Dcodes Technologies",
            "description": "Contact form for web development, mobile app development, UI/UX design, SEO, and digital marketing services",
            "url": "https://dcodes.com/connect",
            "mainEntity": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+91-6353-653-977",
              "email": "sale@dcodestech.com",
              "availableLanguage": ["English", "Gujarati", "Hindi"],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
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

      <div className="min-h-screen mt-16 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

        {/* Navigation */}
        <nav className="relative z-10 p-6 lg:p-8">
          {/* <Link href="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-normal tracking-wide">Back</span>
          </Link> */}
        </nav>

        {/* Main Content */}
        <div className="relative z-10 px-4 pb-20">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-6xl lg:text-8xl font-extralight text-white mb-8 tracking-[0.3em]" itemProp="headline">
                CONNECT
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-12" />
              <p className="text-white/60 font-normal text-lg tracking-wide max-w-2xl mx-auto leading-relaxed" itemProp="description">
                Ready to bring your vision to life? Share your project details and let's create something extraordinary together.
              </p>
            </div>

            {/* Form */}
            <div className="max-w-3xl mx-auto">
              <div className="border border-white/10 rounded-2xl backdrop-blur-sm bg-white/[0.02] p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-8" itemScope itemType="https://schema.org/ContactPage">

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Name Field */}
                    <div className="space-y-4" itemProp="mainEntity" itemScope itemType="https://schema.org/Person">
                      <Label htmlFor="name" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                        Full Name
                      </Label>
                      <div className="relative group">
                        <User className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="pl-12 h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                          aria-label="Your full name"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-4">
                      <Label htmlFor="email" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                        Email Address
                      </Label>
                      <div className="relative group">
                        <Mail className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="pl-12 h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                          aria-label="Your email address"
                          aria-required="true"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Service & Contact */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Service Select */}
                    <div className="space-y-4">
                      <Label className="text-white font-medium text-sm tracking-[0.2em] uppercase">
                        Service Required
                      </Label>

                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                        required
                      >
                        <SelectTrigger className="h-16 border border-white/10 hover:border-white/30 focus:border-white/40 bg-transparent text-white font-normal focus:ring-0 focus:ring-offset-0 rounded-xl transition-all duration-300">
                          <SelectValue placeholder="Select a service" className="text-white/60" />
                        </SelectTrigger>

                        <SelectContent className="bg-black/95 backdrop-blur-xl border border-white/20 text-white rounded-xl overflow-hidden">
                          {services.map((service) => (
                            <SelectItem
                              key={service.value}
                              value={service.value}
                              className="font-normal py-3 text-white hover:text-white hover:bg-white focus:bg-white"
                            >
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Mobile Field */}
                    <div className="space-y-4">
                      <Label htmlFor="mobile" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                        Phone Number
                      </Label>
                      <div className="relative group">
                        <Phone className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-colors duration-300" />
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.mobile}
                          onChange={(e) => handleChange("mobile", e.target.value)}
                          required
                          className="pl-12 h-16 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                          aria-label="Your phone number"
                          aria-required="true"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Message Field */}
                  <div className="space-y-4">
                    <Label htmlFor="message" className="text-white/80 font-normal text-sm tracking-[0.2em] uppercase">
                      Project Details <span className="text-white/40 normal-case font-extralight">(Optional)</span>
                    </Label>
                    <div className="relative group">
                      <MessageSquare className="w-5 h-5 text-white/30 group-focus-within:text-white/60 absolute left-4 top-6 z-10 transition-colors duration-300" />
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={6}
                        className="pl-12 pt-6 border-white/10 focus:border-white/30 bg-transparent text-white placeholder:text-white/30 resize-none font-normal focus:ring-0 focus:ring-offset-0 transition-all duration-300 rounded-xl"
                        aria-label="Project details and message"
                      />
                    </div>
                  </div>

                  {/* CAPTCHA Section */}
                  <CaptchaComponent onValidate={handleCaptchaValidation} />

                  {/* Submit Button */}
                  <div className="pt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !isCaptchaValid}
                      className={`w-full font-normal tracking-[0.3em] uppercase transition-all duration-500 h-16 group relative overflow-hidden rounded-xl ${isCaptchaValid
                        ? 'bg-white hover:bg-white/95 text-black'
                        : 'bg-white/20 text-white/50 cursor-not-allowed'
                        }`}
                      aria-label={isSubmitting ? "Sending your message..." : "Submit your contact form"}
                      aria-busy={isSubmitting}
                    >
                      <div className="relative flex items-center justify-center gap-4">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" aria-hidden="true"></div>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                          </>
                        )}
                      </div>
                    </Button>
                    {!isCaptchaValid && (
                      <p className="text-white/40 text-sm font-normal mt-2 text-center" role="alert">
                        Please complete the security verification to submit the form
                      </p>
                    )}
                  </div>

                </form>
              </div>

              {/* Contact Information */}
              <div className="mt-16 pt-16 border-t border-white/5" itemScope itemType="https://schema.org/ContactPoint">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                  {/* Direct Contact */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-extralight text-white tracking-[0.2em] mb-8">
                      DIRECT CONTACT
                    </h3>

                    {/* Phone/WhatsApp */}
                    <div className="group" itemProp="telephone">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                          <Phone className="w-4 h-4 text-white/60" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                            Call / WhatsApp
                          </p>
                          <a
                            href="tel:+916353653977"
                            className="text-white font-normal text-lg hover:text-white/80 transition-colors duration-300"
                            aria-label="Call Dcodes Technologies at +91 6353 653 977"
                          >
                            +91 6353 653 977
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Quick Link */}
                    <div className="pl-14">
                      <a
                        href="https://wa.me/916353653977"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-normal"
                        aria-label="Message Dcodes Technologies on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Email Contacts */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-extralight text-white tracking-[0.2em] mb-8">
                      EMAIL CONTACT
                    </h3>

                    <div className="space-y-6">
                      {/* Sales */}
                      <div className="group" itemProp="email">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                            <Mail className="w-4 h-4 text-white/60" />
                          </div>
                          <div>
                            <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                              Sales Inquiries
                            </p>
                            <a
                              href="mailto:sale@dcodestech.com"
                              className="text-white font-normal hover:text-white/80 transition-colors duration-300"
                              aria-label="Email sales department at sale@dcodestech.com"
                            >
                              sale@dcodestech.com
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Career */}
                      <div className="group">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                            <User className="w-4 h-4 text-white/60" />
                          </div>
                          <div>
                            <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                              Career Opportunities
                            </p>
                            <a
                              href="mailto:hr@dcodestech.com"
                              className="text-white font-normal hover:text-white/80 transition-colors duration-300"
                              aria-label="Email HR department at hr@dcodestech.com"
                            >
                              hr@dcodestech.com
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* General Info */}
                      <div className="group">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                            <MessageSquare className="w-4 h-4 text-white/60" />
                          </div>
                          <div>
                            <p className="text-white/40 text-xs font-normal tracking-wide uppercase mb-1">
                              General Information
                            </p>
                            <a
                              href="mailto:info@dcodestech.com"
                              className="text-white font-normal hover:text-white/80 transition-colors duration-300"
                              aria-label="Email general information at info@dcodestech.com"
                            >
                              info@dcodestech.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Info */}
              <div className="text-center mt-16 pt-12 border-t border-white/5 space-y-6">
                <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm font-normal tracking-wide">
                  <span>24-Hour Response</span>
                  <div className="w-1 h-1 bg-white/40 rounded-full" aria-hidden="true"></div>
                  <span>Confidential & Secure</span>
                  <div className="w-1 h-1 bg-white/40 rounded-full" aria-hidden="true"></div>
                  <span>No Spam Policy</span>
                </div>
                <p className="text-white/30 text-xs font-extralight tracking-widest uppercase">
                  Your information is protected and will never be shared
                </p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" aria-hidden="true"></div>
                <p className="text-white/20 text-xs font-extralight">
                  DCodes Tech Solutions
                </p>
              </div>
            </div>
          </div>

          <MapComponent />

        </div>
      </div>
    </>
  );
};

export default ConnectPage;