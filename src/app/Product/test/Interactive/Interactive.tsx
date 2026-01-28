// components/InteractiveModules.tsx
"use client";

import { useState } from "react";
import {
    Users, MessageSquare, Calendar, FileText,
    BarChart3, CreditCard, Settings, Bell,
    Target, Shield, Zap, TrendingUp,
    Heart, Globe, Clock, Star
} from "lucide-react";

const modules = [
    {
        id: 1,
        title: "Customer 360° View",
        description: "Complete customer profiles with interaction history",
        icon: <Users className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
        bounceIcon: <Target className="w-5 h-5 animate-bounce" />
    },
    {
        id: 2,
        title: "Communication Hub",
        description: "Email, SMS, WhatsApp integration with templates",
        icon: <MessageSquare className="w-8 h-8" />,
        color: "from-purple-500 to-pink-400",
        bounceIcon: <Zap className="w-5 h-5 animate-pulse" />
    },
    {
        id: 3,
        title: "Appointment Scheduler",
        description: "Book service appointments with automated reminders",
        icon: <Calendar className="w-8 h-8" />,
        color: "from-green-500 to-emerald-400",
        bounceIcon: <Clock className="w-5 h-5 animate-spin-slow" />
    },
    {
        id: 4,
        title: "Service History",
        description: "Track all past services and maintenance records",
        icon: <FileText className="w-8 h-8" />,
        color: "from-orange-500 to-yellow-400",
        bounceIcon: <Heart className="w-5 h-5 animate-heartbeat" />
    },
    {
        id: 5,
        title: "Sales Analytics",
        description: "Visual reports on sales performance and trends",
        icon: <BarChart3 className="w-8 h-8" />,
        color: "from-indigo-500 to-blue-400",
        bounceIcon: <TrendingUp className="w-5 h-5 animate-bounce" />
    },
    {
        id: 6,
        title: "Payment Tracking",
        description: "Monitor payments, invoices, and outstanding dues",
        icon: <CreditCard className="w-8 h-8" />,
        color: "from-teal-500 to-cyan-400",
        bounceIcon: <Shield className="w-5 h-5 animate-ping-slow" />
    },
    {
        id: 7,
        title: "Notifications Center",
        description: "Smart alerts for follow-ups and important updates",
        icon: <Bell className="w-8 h-8" />,
        color: "from-rose-500 to-pink-400",
        bounceIcon: <Star className="w-5 h-5 animate-spin-slow" />
    },
    {
        id: 8,
        title: "Custom Workflows",
        description: "Create automated processes for your business",
        icon: <Settings className="w-8 h-8" />,
        color: "from-violet-500 to-purple-400",
        bounceIcon: <Globe className="w-5 h-5 animate-float" />
    }
];

export default function Interactive() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                        <span className="text-blue-400 font-medium">Customer-Focused Modules</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Everything Your <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">CRM Needs</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Complete customer relationship management designed specifically for CNG kit businesses
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            onMouseEnter={() => setHoveredId(module.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative"
                        >
                            {/* Background Glow */}
                            <div className={`
                absolute -inset-0.5 bg-gradient-to-r ${module.color} rounded-2xl 
                opacity-0 group-hover:opacity-20 blur transition-opacity duration-500
              `}></div>

                            {/* Card */}
                            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 
                rounded-2xl p-8 transition-all duration-300 hover:border-gray-700 
                hover:translate-y-[-4px] h-full">

                                {/* Icon Container */}
                                <div className="relative mb-6">
                                    <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${module.color} 
                    flex items-center justify-center text-white mb-2
                    transition-transform duration-300 group-hover:scale-110
                  `}>
                                        {module.icon}
                                    </div>

                                    {/* Animated Icon */}
                                    <div className="absolute -top-2 -right-2 text-white">
                                        {module.bounceIcon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {module.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {module.description}
                                </p>

                                {/* Hover Indicator */}
                                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} 
                  rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-500 origin-left
                `}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}