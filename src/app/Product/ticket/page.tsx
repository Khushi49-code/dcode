"use client";

import React from "react";
import Head from "next/head";
import {
  Ticket,
  MessageCircle,
  CheckCircle,
  Clock,
  Smartphone,
  Wrench,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Phone,
} from "lucide-react";
import ColorBends from "@/components/ReactBit/ColorBends";

export default function TicketPage() {
  const whatsappNumber = "+919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Message",
      description: "Send 'Hello' to our WhatsApp number",
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Auto Ticket Created",
      description: "Your ticket will be automatically generated",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Device Details",
      description: "Send device issue and model information",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Get Updates",
      description: "Repair status will be sent via WhatsApp",
    },
  ];

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp Integration",
      description: "No app download required",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Available",
      description: "Create tickets anytime",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Response",
      description: "Quick confirmation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi User",
      description: "Admin & User both",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Repair Tracking",
      description: "Track status easily",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure",
      description: "Safe & private data",
    },
  ];

  const deviceTypes = [
    "📱 Smartphones (iPhone, Samsung, OnePlus)",
    "💻 Laptops & Computers",
    "📟 Tablets",
    "🎧 Headphones",
    "⌚ Smartwatches",
    "🖨️ Printers",
  ];

  const instructions = [
    "Your name and contact number",
    "Device model and brand",
    "Clear issue description",
    "Device photo (optional)",
  ];

  return (
    <>
      <Head>
        <title>WhatsApp Ticket System</title>
      </Head>

      <div className="bg-black text-white">

        {/* HERO */}
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0">
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
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              {/* <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-xs uppercase tracking-widest text-white/80">
                WhatsApp Based System
              </span> */}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
              Dcodes Smart IT
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Helpdesk & Service
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Ticket System
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              Create a ticket via WhatsApp for any device repair. Updates will be sent directly on WhatsApp.
            </p>

            <div className="mt-10">
              <a
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-full text-lg shadow-lg shadow-green-600/30 transition"
              >
                <MessageCircle className="w-6 h-6" />
                Start on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-white/40 mt-4">
              Click to chat • No app required
            </p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="p-6 bg-gray-900 rounded-xl text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <h2 className="text-3xl text-center mb-12">Features</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-gray-900 rounded-xl">
                <div className="text-blue-400 mb-3">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="text-white/60 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMBINED SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl mb-4">We Repair All Devices</h2>
              <p className="text-white/60 mb-6">
                We handle all types of repairs.
              </p>

              <ul className="space-y-3">
                {deviceTypes.map((d, i) => (
                  <li key={i} className="flex gap-2 text-white/70">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl">What to Send on WhatsApp</h3>
              </div>

              <ul className="space-y-4">
                {instructions.map((ins, i) => (
                  <li key={i} className="flex gap-3 text-white/70">
                    <span className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-xs text-blue-400">
                      {i + 1}
                    </span>
                    {ins}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 border-t border-white/10">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            Create Ticket
          </a>
        </section>

      </div>
    </>
  );
}